import { Router } from "express";
import { createRooms, deleteRoomsId, getRooms, getRoomsId, updateRooms } from "../controllers/rooms.controllers.js";


const router = Router()

router.get('/rooms', getRooms)

router.get('/rooms/:id', getRoomsId)

router.post('/rooms', createRooms)

router.patch('/rooms/:id', updateRooms)

router.delete('/rooms/:id', deleteRoomsId)

export default router;