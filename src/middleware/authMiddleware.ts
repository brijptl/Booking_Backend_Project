import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (req: any, res: Response, next: NextFunction) => {

  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.send("Token required");
  }

  try {
    const verified: any = jwt.verify(token, "secretkey");
    req.user = verified;
    next();
  } catch (error) {
    res.send("Invalid token");
  }
};