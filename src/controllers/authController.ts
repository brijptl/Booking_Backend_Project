import { Request, Response } from "express";
import { registerUserService, loginUserService } from "../services/authService";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const result = await registerUserService(req.body);
    res.send(result.message);
  } catch (err) {
    res.send("Error while registering user");
  }
};

// for login.....
export const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await loginUserService(req.body);
    res.json(result);
  } catch (error) {
    res.send("Error during login");
  }
};