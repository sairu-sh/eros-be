import { IChatParams } from "../interfaces/chats.interface";
import ChatModel from "../model/chats.model";

export const getChats = async (params: IChatParams) => {
  try {
    return await ChatModel.getAllChats(params);
  } catch {
    return null;
  }
};
