import { Router } from "express";
import { getUsers, usuarioLogin, apiLogin, apiProtected} from "../controllers/usuarios.controller.js";

const router=Router()

router.get('/users',getUsers)
router.post('/users/login',usuarioLogin)
router.post('/users/login',apiLogin)
router.post('/users/protected',apiProtected)

export default router