import InterestModel from "../model/interests";

export const getAllInterests = async () => {
  const data = await InterestModel.getAllInterests();
  return data;
};
