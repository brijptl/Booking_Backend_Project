import Booking from "../models/Booking";

// guest booking
export const createBookingService = async (data: any) => {
  const booking = new Booking(data);
  await booking.save();

  return {
    message: "Booking created",
    data: booking
  };
};

// user booking
export const createUserBookingService = async (userId: string, data: any) => {
  const booking = new Booking({
    userId,
    ...data
  });

  await booking.save();

  return {
    message: "User booking created",
    data: booking
  };
};

// get all bookings
export const getAllBookingsService = async () => {
  const bookings = await Booking.find();

  return {
    message: "All bookings",
    data: bookings
  };
};

// approve booking
export const approveBookingService = async (id: string) => {
  await Booking.findByIdAndUpdate(id, { status: "approved" });

  return { message: "Booking approved" };
};

// reject booking
export const rejectBookingService = async (id: string) => {
  await Booking.findByIdAndUpdate(id, { status: "rejected" });

  return { message: "Booking rejected" };
};

// delete booking
export const deleteBookingService = async (id: string) => {
  await Booking.findByIdAndDelete(id);

  return { message: "Booking deleted" };
};