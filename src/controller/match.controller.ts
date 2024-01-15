import { Response, NextFunction } from "express";
import * as matchService from "../service/match.service";

export const getMatches = async (req: any, res: Response) => {
  const id: number = req.user.id;
  try {
    const data = await matchService.getAllMatches(id);
    res.json(data);
  } catch {}
};

export const createMatch = async (req: any, res: Response) => {
  const primaryUser: number = req.user.id;
  const secondaryUser: number = req.body.id;
  try {
    const data = await matchService.createMatch({ primaryUser, secondaryUser });
    res.json(data);
  } catch {}
};

export const deleteMatch = async (req: any, res: Response) => {
  const primaryUser: number = req.user.id;
  const secondaryUser: number = req.body.id;
  try {
    const data = await matchService.deleteMatch({ primaryUser, secondaryUser });
    res.json(data);
  } catch {}
};
