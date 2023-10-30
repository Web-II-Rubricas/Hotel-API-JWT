import { json } from "express"
import jwt from "jsonwebtoken";
import cors from "cors";
import { pool } from "../db.js";
import bcrypt from "bcrypt";

const comparePasswords = async (inputPassword, hashedPassword) => {
  try {
    // Compara la contraseña proporcionada con la contraseña hash almacenada
    return await bcrypt.compare(inputPassword, hashedPassword);
  } catch (error) {
    console.error('Error al comparar contraseñas:', error);
    return false;
  }
};

export const getUsers = async (req, res) => {
try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.send(rows);
} catch (error) {
    res.status(500).json({ message: "Ha ocurrido un Error" });
}
};

/*---------------------------------------------------------*/

export const usuarioLogin = async (req, res) => {
    const usuario = req.body.usuario;
    const clave = req.body.clave;
    try {
      // Consulta la base de datos para encontrar al usuario con el nombre proporcionado
      const query = "SELECT id, name, Contraseña FROM users WHERE name = ?";
      const [results] = await pool.execute(query, [usuario]);
  
      if (results.length === 0) {
        res.status(401).send("Usuario incorrecta");
      } else {
        const user = results[0];
        const hashedPasswordFromDB = user.Contraseña;

        // Comprueba si la contraseña proporcionada coincide con la almacenada en la base de datos
        const isPasswordValid = await comparePasswords(clave, hashedPasswordFromDB);

        if (isPasswordValid) {
          // Genera un token JWT y envíalo como respuesta
          jwt.sign({ user }, "secretkey", { expiresIn: "100s" }, (error, token) => {
            if (error) {
              res.status(500).send("Error al generar el token");
            } else {
              res.cookie("token", token, { httpOnly: true });
              res.json({ message: "inicio exitoso", user, token });
            }
          });
        } else {
          res.status(401).send("Contraseña incorrecta");
        }
      }
    } catch (error) {
      console.error("Error al consultar la base de datos:", error);
      res.status(500).send("Error en la base de datos");
    }
};

// app.post('/usuario/login',(req,res)=>{
//     const usuario = req.body.usuario;
//     const clave = req.body.clave;

//     if(usuario == 'pedro' && clave == '123'){
//         const user={
//             id:1,
//             name:"pedro",
//             contraseña:"123"
//         }
//         jwt.sign({user},'secretkey',{expiresIn:'100s'},(error,token)=>{
//             res.cookie('token', token, { httpOnly: true })
//             res.json({ message: "inicio exitoso", user, token})
//         })
//     } else {
//         res.status(401).send('Usuario o Contraseña incorrecta');
//     }
// })

/*---------------------------------------------------------*/

export function verifyToken(req,res,next){
    const bearerHeader=req.headers['authorization']

    if (typeof bearerHeader !=='undefined') {
        const bearerToken=bearerHeader.split(" ")[1]
        req.token=bearerToken

        next()
    } else {

        res.sendStatus(403)
    }
}
