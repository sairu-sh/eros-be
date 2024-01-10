import { Request, Response, NextFunction } from "express";
import * as userDetailService from "../service/userDetails";

export const createDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = Number(req.params.id);
    const params = { ...req.body };
    params.uid = userId;
    await userDetailService.createDetail(params);
    return res.status(200).json({
      message: "details created successfully",
    });
  } catch (err) {
    next(err);
  }
};
