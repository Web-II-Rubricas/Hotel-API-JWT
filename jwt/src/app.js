import express from "express";
import  BookingsRoutes   from './routes/bookings.rutas.js'
import roomsRoutes from './routes/rooms.rutas.js'

const app=express()

app.use(express.json())
app.use(BookingsRoutes)
app.use('/api',roomsRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message:'Endpoint no encontrado'
    })
})

export default app;