import express, { Request, Response } from "express";
import connectDB from "./config/db";

const app = express();

app.use(express.json());

// connect database
connectDB();

// test route
app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});