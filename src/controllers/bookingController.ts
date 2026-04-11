import { Request, Response } from "express";
import Booking from "../models/Booking";

// guest booking
export const createBooking = async (req: Request, res: Response) => {
  const { name, email, date, time } = req.body;

  try {
    const booking = new Booking({
      name,
      email,
      date,
      time
    });

    await booking.save();

    res.status(200).json({
      message: "Booking created",
      data: booking
    });

  } catch (error) {
    res.status(500).json({
      message: "Error while creating booking"
    });
  }
};

// user booking (protected)
export const createUserBooking = async (req: any, res: Response) => {
  const { date, time } = req.body;

  try {
    const booking = new Booking({
      userId: req.user.id,
      date,
      time
    });

    await booking.save();

    res.status(200).json({
      message: "User booking created",
      data: booking
    });

  } catch (error) {
    res.status(500).json({
      message: "Error when creating booking"
    });
  }
};