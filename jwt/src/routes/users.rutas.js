import { Router } from "express";
import { getUsers, usuarioLogin, verifyToken} from "../controllers/users.controllers.js";

const router=Router()

router.get('/users',getUsers)

router.post('/users/login',usuarioLogin)

router.post('/users/protected', verifyToken, (req,res)=>{
    jwt.verify(req.token,'secretkey',(error,authData)=>{
        if (error) {
            res.sendStatus(403)
        } else {
            res.json({
                message:"Acceso a ruta protegida",authData
            })
        }
    })
})


export default router