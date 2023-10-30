import { json } from "express";
import jwt from "jsonwebtoken";
import { pool } from "../db.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un Error" });
  }
};

/*---------------------------------------------------------*/

export const usuarioLogin = async (req, res) => {
  try {
    const name = req.body.name;
    const Contraseña = req.body.Contraseña;
    // Consulta la base de datos para encontrar al usuario con el nombre proporcionado
    const [result] = await pool.query('SELECT * FROM users WHERE name = ?', [name]);

    if (result.length === 0) {
      res.status(401).send("Usuario no encontrado");
    } else {
      //  res.json({message:'Usuario encontrado', result})
      const users = result[0];
      //  res.json({users})
      if (Contraseña == users.Contraseña) {
        jwt.sign({ users },"secretkey",{ expiresIn: "100s" },(error, token) => {
          if (error) {
            res.status(500).send("Error al generar el token");
          } else {
            res.cookie("token", token, { httpOnly: true });
            res.json({ message: "inicio exitoso", users, token });
          }
        });
      }else{
        res.status(401).json({ error: "Credenciales inválidas" });
      }
    }
  } catch (error) {
    console.error("Error al consultar la base de datos:", error);
    res.status(500).send("Error en la base de datos");
  }
};

/*---------------------------------------------------------*/

export function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}
