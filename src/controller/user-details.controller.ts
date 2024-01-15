import { Response, NextFunction } from "express";
import * as userDetailService from "../service/user-details.service";
import { IUpdateQuery } from "../interfaces/update-query.interface";

export const createDetails = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const uid = req.user.id;
    const params = { ...req.body };
    params.uid = uid;
    await userDetailService.createDetail(params);
    return res.status(200).json({
      message: "details created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const updateDetails = async (req: any, res: Response) => {
  try {
    const uid = req.user.id;
    const params: IUpdateQuery = { ...req.body };
    params.id = uid;
    await userDetailService.updateDetails(params);
    return res.status(200).json({
      message: "details updated successfully",
    });
  } catch (err) {
    console.error(err);
  }
};
