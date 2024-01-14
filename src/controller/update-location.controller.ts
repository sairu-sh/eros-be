import { Request, Response, NextFunction } from "express";
import * as updateLocationService from "../service/update-location.service";

export const updateLocation = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.user;
    const { latitude, longitude } = req.body;
    const data = await updateLocationService.updateLocation(Number(id), {
      latitude,
      longitude,
    });
    res.json({
      message: "Location updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
