import { Request, Response, NextFunction } from "express";
import * as authService from "../service/auth";
import { error } from "console";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await authService.signUP(req.body);
    return res.status(200).json({
      id: data.id,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    const data = await authService.login(body);

    return res.json(data);
  } catch (error) {
    next(error);
  }
};
