import { Response, NextFunction } from "express";
import * as matchRequestService from "../service/match-request.service";

export const sendRequest = async (req: any, res: Response) => {
  const senderId: number = req.user.id;
  const receiverId: number = req.body.id;
  const data = await matchRequestService.sendRequest({ senderId, receiverId });
  res.json(data);
};

export const deleteRequest = async (req: any, res: Response) => {
  const senderId: number = req.user.id;
  const receiverId: number = req.body.id;
  const data = await matchRequestService.deleteRequest({
    senderId,
    receiverId,
  });
  res.json(data);
};

export const getRequests = async (req: any, res: Response) => {
  const id: number = req.user.id;
  const data = await matchRequestService.getAllRequests(id);
  res.json(data);
};
