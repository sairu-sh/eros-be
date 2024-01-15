import MatchModel from "../model/matches.model";
import { IMatchParams } from "../interfaces/match.interface";

export const getAllMatches = async (id: number) => {
  const data = await MatchModel.getAllMatches(id);
  return data;
};

export const createMatch = async (params: IMatchParams) => {
  const data = await MatchModel.createMatch(params);
  return data;
};

export const deleteMatch = async (params: IMatchParams) => {
  const data = await MatchModel.deleteMatch(params);
  return data;
};
