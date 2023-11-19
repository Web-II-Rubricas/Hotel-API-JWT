import { pool } from "../db.js";


export const getRooms = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM rooms')
        res.send(rows)
    } catch (error) {
        res.status(500).json({message: 'Ha ocurrido un Error'})
    }
}

export const getRoomsId = async (req, res) =>{
    const { id } = req.params
    try {
        const [rows] = await pool.query('SELECT * FROM rooms WHERE id=?', [id])
        if (rows.length == 0) return res.status(404).json({
            message: 'La habitacion no ha sido registrada'
        })
        res.send(rows[0])
    } catch (error) {
        res.status(500).json({ message: 'Ha ocurrido un Error' })
    }
}

export const createRooms=async(req,res)=>{
        const { id } = req.params
        const { numero, tipo, valor } = req.body;
        try {

        const [rows] = await pool.query('INSERT INTO rooms (numero, tipo, valor ) VALUES (?, ?, ?)'
            , [numero, tipo, valor]);

        if (rows.affectedRows === 1) {
            res.status(201).json({ message: 'Habitacion creada correctamente' });
        } else {
            res.status(500).json({ message: 'No se pudo crear la habitacion' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ha ocurrido un error' });
    }
}

export const updateRooms=async(req,res)=>{
    try {
        const { id } = req.params;
        const {  numero, tipo, valor } = req.body;

        const [result] = await pool.query('UPDATE rooms SET  numero=?, tipo=?, valor=? WHERE id=?',
        [ numero, tipo, valor,id]);

    if (result.affectedRows <=0)return res.status(404).json({ 
        message: 'Habitacion actualizada correctamente' 
    });

    const [rows] = await pool.query('SELECT * FROM rooms  WHERE id=?',[id]);
    res.json(rows[0]);

    } catch (error) {
        res.status(500).json({ message: 'Ha ocurrido un error' });
    }
}

export const deleteRoomsId=async(req,res)=>{
    const { id } = req.params
    try {
        const [result] = await pool.query('DELETE FROM rooms WHERE id=?', [id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'habitacion no encontrada'
        })
        console.log(result)
        res.status(200).json({ message: 'habitacion eliminada correctamente' })
    } catch (error) {
        res.status(500).json({ message: 'Ha ocurrido un Error' })
    }
}