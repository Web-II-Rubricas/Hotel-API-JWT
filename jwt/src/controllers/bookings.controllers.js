import { pool } from "../db.js";


export const getBookings = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM bookings')
        res.send(rows)
    } catch (error) {
        res.status(500).json({message: 'Ha ocurrido un Error'})
    }
}

export const getBookingsId = async (req, res) =>{
    const { codigo } = req.params
    try {
        const [rows] = await pool.query('SELECT * FROM bookings WHERE codigo=?', [codigo])
        if (rows.length == 0) return res.status(404).json({
            message: 'Reserva no ha sido registrada'
        })
        res.send(rows[0])
    } catch (error) {
        res.status(500).json({ message: 'Ha ocurrido un Error' })
    }
}

export const createBookings=async(req,res)=>{
        const { codigo } = req.params
        const { codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida } = req.body;
        
        try {
        const [roomsrows] = await pool.query('SELECT * FROM rooms  WHERE id=?',[codigo_habitacion]);

        const [rows] = await pool.query('INSERT INTO bookings (codigo, codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida ) VALUES (?, ?, ?, ?, ?, ?, ?)'
            , [codigo, codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida]);

        if (roomsrows.length === 0) {
            res.status(500).json({message: 'No se pudo crear la reserva'});
        } else {
            res.status(201).json({ message: 'Reserva creada correctamente' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ha ocurrido un error' });
    }
}

export const updateBookings=async(req,res)=>{
    
        const { codigo } = req.params;
        const { codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida } = req.body;
        try {

        const [result] = await pool.query('UPDATE bookings SET codigo_habitacion=?, nombre_cliente=?, telefono_cliente=?, fecha_reservacion=?, fecha_entrada=? ,fecha_salida=? WHERE codigo=?',
            [codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida, codigo]);

        if (result.affectedRows <=0)return res.status(404).json({ 
            message: 'Reserva actualizada correctamente' 
        });

        const [rows] = await pool.query('SELECT * FROM bookings  WHERE codigo=?',[codigo]);
        res.json(rows[0]);

} catch (error) {
        res.status(500).json({ message: 'Ha ocurrido un error' });
    }
}

export const deleteBookingsId=async(req,res)=>{
    const { codigo } = req.params
    try {
        const [result] = await pool.query('DELETE FROM bookings WHERE codigo=?', [codigo])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Reserva no encontrada'
        })
        console.log(result)
        res.status(200).json({ message: 'Reserva eliminada correctamente' })
    } catch (error) {
        res.status(500).json({ message: 'Ha ocurrido un Error' })
    }
}