import { Request, Response, NextFunction } from "express";
import { getAllInterests } from "../service/interests";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const data = await getAllInterests();
    res.json(data);
  } catch (e) {
    console.error(e);
  }
};
