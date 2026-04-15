import User from "../models/user";
import jwt from "jsonwebtoken";

// register service
export const registerUserService = async (data: any) => {
  const { name, email, password } = data;

  const newUser = new User({
    name,
    email,
    password
  });

  await newUser.save();

  return { message: "User registered successfully" };
};

// login service
export const loginUserService = async (data: any) => {
  const { email, password } = data;

  const user = await User.findOne({ email });

  if (!user) {
    return { message: "User not found" };
  }

  if (user.password !== password) {
    return { message: "Wrong password" };
  }

  const token = jwt.sign(
    { id: user._id },
    "secretkey"
  );

  return {
    message: "Login successful",
    token
  };
};