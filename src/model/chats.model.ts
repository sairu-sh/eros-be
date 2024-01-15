import { IChatInsertion, IChatParams } from "../interfaces/chats.interface";
import BaseModel from "./base-model.model";

export default class MatchModel extends BaseModel {
  static async getAllChats(params: IChatParams) {
    return this.queryBuilder()
      .select("sender_id", "receiver_id", "content", "created_at")
      .table("chats")
      .where((builder) => {
        builder
          .where({
            sender_id: params.primaryUser,
            receiver_id: params.secondaryUser,
          })
          .orWhere({
            sender_id: params.secondaryUser,
            receiver_id: params.primaryUser,
          });
      })
      .orderBy("created_at", "desc");
  }

  static async createChat(params: IChatInsertion) {
    return this.queryBuilder()
      .insert({
        sender_id: params.primaryUser,
        receiver_id: params.secondaryUser,
        content: params.content,
      })
      .table("chats")
      .returning("id");
  }
}
