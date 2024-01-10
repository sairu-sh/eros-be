import { NextFunction, Request, Response } from "express";

import * as userService from "../service/users";
// import { IUser } from "../interface/user";

export const getById = async (req: any, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.user.id);

    const data = await userService.getById(id);

    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const data = await userService.deleteUser(id);

    return res.json({ message: "User successfully deleted" });
  } catch (error) {
    next(error);
  }
};
