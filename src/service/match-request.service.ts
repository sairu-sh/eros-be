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

export const getAllRequests = async (id: number) => {
  const query = await RequestsModel.getAllRequests(id);
  if (!query) {
    throw new BadRequestError("No requests found");
  }
  return query;
};

export const getRequest = async (params: IMatchRequest) => {
  const query = await RequestsModel.getRequest(params);
  if (!query) {
    throw new BadRequestError("Request not found");
  }
  return query;
};
