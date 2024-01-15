import { Response } from "express";
import { getChats, createChat } from "../service/chats.service";
import { IChatInsertion } from "../interfaces/chats.interface";

export const getAllChats = async (req: any, res: Response) => {
  const primaryUser: number = req.user.id;
  const secondaryUser: number = req.params.id;
  const params = {
    primaryUser,
    secondaryUser,
  };
  const data = await getChats(params);
  res.json(data);
};

export const insertChat = async (req: any, res: Response) => {
  const primaryUser: number = Number(req.user.id);
  const secondaryUser: number = req.body.id;
  const params: IChatInsertion = {
    primaryUser,
    secondaryUser,
    content: req.body.content,
  };
  console.log(params);
  try {
    const data = await createChat(params);
    if (data)
      res.json({
        message: "success",
        data: data,
      });
  } catch {}
  res.json({ message: "error" });
};
