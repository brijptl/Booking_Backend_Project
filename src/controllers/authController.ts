import { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    res.send("User registered successfully");
  } catch (err) {
    res.send("Error while registering user");
  }
};

// for login.....
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.send("User not found");
    }

    if (user.password !== password) {
      return res.send("Wrong password");
    }

    // JWT token......
    const token = jwt.sign(
      { id: user._id },
      "secretkey"
    );

    res.json({ token });

  } catch (error) {
    res.send("Error during login");
  }
};