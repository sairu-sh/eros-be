import { IMatchRequest } from "../interfaces/match-request.interface";
import RequestsModel from "../model/match-requests.model";
import BadRequestError from "../errors/badRequestError";

export const sendRequest = async (params: IMatchRequest) => {
  const query = await RequestsModel.createRequest(params);
  if (!query) {
    throw new BadRequestError("Request not sent");
  }
  return query;
};

export const deleteRequest = async (params: IMatchRequest) => {
  const query = await RequestsModel.deleteRequest(params);
  if (!query) {
    throw new BadRequestError("Request not deleted");
  }
  return query;
};
