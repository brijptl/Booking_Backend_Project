import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

  const token = req.headers["authorization"] as string;

  if (!token) {
    return res.send("Token required");
  }

  try {
    jwt.verify(token, "secretkey");
    next();
  } catch (error) {
    res.send("Invalid token");
  }
};