import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  userId: String // optional (for logged-in user)
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;