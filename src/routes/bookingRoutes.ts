import express from "express";
import { createBooking, createUserBooking } from "../controllers/bookingController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

// guest booking
router.post("/booking", createBooking);

// user booking (protected)
router.post("/booking/user", verifyToken, createUserBooking);

export default router;