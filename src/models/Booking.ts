import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  status: {
    type: String,
    default: "pending" 
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;