import { pool } from "../db.js";

export const loco = (req, res) => res.json({ message: "Bienvenido" });

export const prueba=async(req,res)=>{
    const [result]=await pool.query('SELECT "prueba exitosa" AS result')
    res.json(result[0])
}