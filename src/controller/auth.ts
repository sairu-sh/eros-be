import { Request, Response, NextFunction } from "express";
import { signUP } from "../service/auth";
import { error } from "console";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await signUP(req.body);
    return res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};
