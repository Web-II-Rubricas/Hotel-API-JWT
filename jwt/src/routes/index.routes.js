import { Router } from "express";
import { loco,prueba } from "../controllers/index.controller.js";


const router=Router()

router.get("/", loco);
router.get('/prueba',prueba)
export default router;