import express, { Request, Response } from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import bookingRoutes from "./routes/bookingRoutes";
import { verifyToken } from "./middleware/authMiddleware";

const app = express();

app.use(express.json());

// connect database
connectDB();

// auth routes
app.use("/api", authRoutes);

// booking routes
app.use("/api", bookingRoutes);

// protected route
app.get("/api/protected", verifyToken, (req: Request, res: Response) => {
  res.send("You have access");
});

// test route
app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});