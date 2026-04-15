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
    const result = await createBookingService(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error while creating booking" });
  }
};

// user booking (protected)
export const createUserBooking = async (req: any, res: Response) => {
  try {
    const result = await createUserBookingService(req.user.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error when creating booking" });
  }
};

// get all bookings (admin)
export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const result = await getAllBookingsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

// approve booking
export const approveBooking = async (req: Request, res: Response) => {
  try {
    const result = await approveBookingService(req.params.id as string);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error approving booking" });
  }
};

// reject booking
export const rejectBooking = async (req: Request, res: Response) => {
  try {
    const result = await rejectBookingService(req.params.id as string);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error rejecting booking" });
  }
};

// delete booking
export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const result = await deleteBookingService(req.params.id as string);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking" });
  }
};