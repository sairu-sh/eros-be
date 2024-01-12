import { Response } from "express";
import { getAllProfiles } from "../service/get-all-profiles.service";

export const getProfiles = async (req: any, res: Response) => {
  try {
    const preferedGender = req.user.prefered_gender;
    const query = req.query;
    const profiles = await getAllProfiles(req.user.id, query);
    res.json(profiles);
  } catch (e) {}
};
