import { Request, Response } from "express";
import { registerUserService, loginUserService } from "../services/authService";

export const registerUser = async (req: Request, res: Response) => {
  try {
    console.log("Register user:", req.body.email);

    const result = await registerUserService(req.body);
    res.send(result.message);
  } catch (err) {
    console.log("Error registering user:", err);

    res.send("Error while registering user");
  }
};

// for login
export const loginUser = async (req: Request, res: Response) => {
  try {
    console.log("Login attempt:", req.body.email);

    const result = await loginUserService(req.body);
    res.json(result);
  } catch (error) {
    console.log("Error during login:", error);

    res.send("Error during login");
  }
};