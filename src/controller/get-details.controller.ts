import { Request, Response } from "express";
import { getDetails } from "../service/get-details.service";
import { IReq } from "../interfaces/request.interface";

export const getDetailsController = async (req: any, res: Response) => {
  try {
    const id = Number(req.params.id);
    const details = await getDetails(id, req.user.id);
    res.json(details);
  } catch (e) {}
};
