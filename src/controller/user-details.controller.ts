import { Request, Response, NextFunction } from "express";
import * as userDetailService from "../service/user-details.service";

export const createDetails = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const uid = req.user.id;
    const params = { ...req.body };
    params.uid = uid;
    console.log(uid);
    await userDetailService.createDetail(params);
    return res.status(200).json({
      message: "details created successfully",
    });
  } catch (err) {
    next(err);
  }
};
