import { IChatInsertion, IChatParams } from "../interfaces/chats.interface";
import ChatModel from "../model/chats.model";

export const getChats = async (params: IChatParams) => {
  try {
    console.log("service");
    return await ChatModel.getAllChats(params);
  } catch {
    return null;
  }
};

export const createChat = async (params: IChatInsertion) => {
  try {
    return await ChatModel.createChat(params);
  } catch {
    return null;
  }
};
