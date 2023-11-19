import { Router } from "express";
import { createBookings, deleteBookingsId, getBookings, getBookingsId, updateBookings } from "../controllers/bookings.controllers.js";


const router = Router()


router.get('/bookings', getBookings)
router.get('/bookings/:codigo', getBookingsId)

router.post('/bookings', createBookings)

router.patch('/bookings/:codigo', updateBookings)

router.delete('/bookings/:codigo', deleteBookingsId)

export default router;