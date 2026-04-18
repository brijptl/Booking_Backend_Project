import { Request, Response } from "express";
import {
  createBookingService,
  createUserBookingService,
  getAllBookingsService,
  approveBookingService,
  rejectBookingService,
  deleteBookingService
} from "../services/bookingService";

// guest booking
export const createBooking = async (req: Request, res: Response) => {
  try {
    console.log("Creating booking:", req.body);

    const result = await createBookingService(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error creating booking:", error);

    res.status(500).json({ message: "Error while creating booking" });
  }
};

// user booking (protected)
export const createUserBooking = async (req: any, res: Response) => {
  try {
    console.log("User booking:", req.user.id, req.body);

    const result = await createUserBookingService(req.user.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error creating user booking:", error);

    res.status(500).json({ message: "Error when creating booking" });
  }
};

// get all bookings (admin)
export const getAllBookings = async (req: Request, res: Response) => {
  try {
    console.log("Fetching all bookings");

    const result = await getAllBookingsService();
    res.status(200).json(result);
  } catch (error) {
    console.log("Error fetching bookings:", error);

    res.status(500).json({ message: "Error fetching bookings" });
  }
};

// approve booking
export const approveBooking = async (req: Request, res: Response) => {
  try {
    console.log("Approving booking:", req.params.id);

    const result = await approveBookingService(req.params.id as string);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error approving booking:", error);

    res.status(500).json({ message: "Error approving booking" });
  }
};

// reject booking
export const rejectBooking = async (req: Request, res: Response) => {
  try {
    console.log("Rejecting booking:", req.params.id);

    const result = await rejectBookingService(req.params.id as string);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error rejecting booking:", error);

    res.status(500).json({ message: "Error rejecting booking" });
  }
};

// delete booking
export const deleteBooking = async (req: Request, res: Response) => {
  try {
    console.log("Deleting booking:", req.params.id);

    const result = await deleteBookingService(req.params.id as string);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error deleting booking:", error);

    res.status(500).json({ message: "Error deleting booking" });
  }
};