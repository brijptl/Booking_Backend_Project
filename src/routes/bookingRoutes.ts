import express from "express";
import { 
  createBooking, 
  createUserBooking,
  getAllBookings,
  approveBooking,
  rejectBooking,
  deleteBooking
} from "../controllers/bookingController";
import { verifyToken } from "../middleware/authMiddleware";

const router = express.Router();

// guest booking
router.post("/booking", createBooking);

// user booking (protected)
router.post("/booking/user", verifyToken, createUserBooking);

// admin routes
router.get("/bookings", getAllBookings);
router.put("/booking/approve/:id", approveBooking);
router.put("/booking/reject/:id", rejectBooking);
router.delete("/booking/:id", deleteBooking);

export default router;