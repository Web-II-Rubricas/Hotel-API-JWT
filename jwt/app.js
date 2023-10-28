import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";

const app=express()
const port=3001

//middleware
app.use(express.json())
app.use(cors())

app.get('/api',(req,res)=>{
    res.json({
        message:"node y jwt"
    })
})

app.post('/usuario/login',(req,res)=>{
    const usuario = req.body.usuario;
    const clave = req.body.clave;

    if(usuario == 'pedro' && clave == '123'){
        const user={
            id:1,
            name:"pedro",
            contraseña:"123"
        }
        jwt.sign({user},'secretkey',{expiresIn:'100s'},(error,token)=>{
            res.cookie('token', token, { httpOnly: true })
            res.json({ message: "inicio exitoso", user, token})
        })
    } else {
        res.status(401).send('Usuario o contraseña incorrecta');
    }
    
    
    
})

app.post('/api/login',(req,res)=>{
    const user={
        id:1,
        name:"pedro",
        email:"pedro@gmail.com"
    }
    jwt.sign({user},'secretkey',{expiresIn:'100s'},(error,token)=>{
        res.json({token})
    })
    
})

app.post('/api/protected',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(error,authData)=>{
        if (error) {
            res.sendStatus(403)
        } else {
            res.json({
                message:"Acceso a ruta protegida",
                authData
            })
        }
    })
    
})
function verifyToken(req,res,next){
    const bearerHeader=req.headers['authorization']
    
    if (typeof bearerHeader !=='undefined') {
        const bearerToken=bearerHeader.split(" ")[1]
        req.token=bearerToken
        
        next()
    } else {
        
        res.sendStatus(403)
    }
}

app.listen(port)
console.log(`Server running on port ${port}`)