import express from "express";
import jwt from "jsonwebtoken";

const app=express()
const port=3001

app.get('/api',(req,res)=>{
    res.json({
        message:"node y jwt"
    })
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