// import { json } from "express"
// import jwt from "jsonwebtoken";
// import cors from "cors";
import {pool} from '../db.js';


export const getUsers = async (req, res) => {
    try {
        const [rows]=await pool.query("SELECT * FROM users")
        res.send(rows)    
    } catch (error) {
        res.status(500).json({message:"Ha ocurrido un Error"})
    }
}

// app.get('/api',(req,res)=>{
//     res.json({
//         message:"node y jwt"
//     })
// })

export const usuarioLogin = async (req, res) => {
    // const usuario = req.body.usuario;
    // const clave = req.body.clave;

    // // Consulta la base de datos para encontrar al usuario con el nombre de usuario proporcionado
    // const sql = 'SELECT id, name, contraseña FROM users WHERE name = ?';
    // pool.query(sql, [usuario], (err, results) => {
    // if (err) {
    //     console.error('Error al consultar la base de datos:', err);
    //     res.status(500).send('Error en la base de datos');
    // } else if (results.length === 0) {
    //     res.status(401).send('Usuario o Contraseña incorrecta');
    // } else {
    //     const user = results[0];

    //     // Comprueba si la contraseña proporcionada coincide con la almacenada en la base de datos
    //     if (user.contraseña === clave) {
    //       // Genera un JWT y envíalo como respuesta
    //     jwt.sign({user},'secretkey',{expiresIn:'100s'},(error,token)=>{
    //                     res.cookie('token', token, { httpOnly: true })
    //                     res.json({ message: "inicio exitoso", user, token})
    //                 })    
    //     } else {
    //         res.status(401).send('Usuario o Contraseña incorrecta');
    //     }
    // }
    // });
}

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

export const apiLogin =  (req, res) => {
    // console.log(req.body);
    // res.send('post Login');
}

// app.post('/api/login',(req,res)=>{
//     const user={
//         id:1,
//         name:"pedro",
//         email:"pedro@gmail.com"
//     }
//     jwt.sign({user},'secretkey',{expiresIn:'100s'},(error,token)=>{
//         res.json({token})
//     })
    
// })

export const apiProtected = async (req, res) => {

}

// app.post('/api/protected',verifyToken,(req,res)=>{
//     jwt.verify(req.token,'secretkey',(error,authData)=>{
//         if (error) {
//             res.sendStatus(403)
//         } else {
//             res.json({
//                 message:"Acceso a ruta protegida",
//                 authData
//             })
//         }
//     })
    
// })

// function verifyToken(req,res,next){
//     const bearerHeader=req.headers['authorization']
    
//     if (typeof bearerHeader !=='undefined') {
//         const bearerToken=bearerHeader.split(" ")[1]
//         req.token=bearerToken
        
//         next()
//     } else {
        
//         res.sendStatus(403)
//     }
// }
