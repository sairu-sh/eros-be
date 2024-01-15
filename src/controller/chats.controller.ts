import { Response } from "express";
import { getChats } from "../service/chats.service";

export const getAllChats = async (req: any, res: Response) => {
  const primaryUser: number = req.user.id;
  const secondaryUser: number = req.body.id;
  const params = {
    primaryUser,
    secondaryUser,
  };
  const data = await getChats(params);
  res.json(data);
};
