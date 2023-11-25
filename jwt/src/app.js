import express from "express";
import morgan from "morgan";
import cors from "cors";

import  BookingsRoutes   from './routes/bookings.rutas.js'
import roomsRoutes from './routes/rooms.rutas.js'
import usuariosRoutes from "./routes/users.rutas.js";

const app=express()

app.use(express.json())
app.use(morgan("dev"));
app.use(cors())

app.use(BookingsRoutes)
app.use('/api',roomsRoutes)
app.use('/api', usuariosRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        message:'Endpoint no encontrado'
    })
})

export default app;