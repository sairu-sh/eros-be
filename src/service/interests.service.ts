import InterestModel from "../model/interests.model";

export const getAllInterests = async () => {
  const data = await InterestModel.getAllInterests();
  return data;
};
