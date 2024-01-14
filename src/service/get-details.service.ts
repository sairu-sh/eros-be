import DetailModel from "../model/get-details.model";
import NotFoundError from "../errors/notFoundError";

export const getDetails = async (id: number, uid: number) => {
  try {
    const details = await DetailModel.getDetails(id, uid);
    if (!details) {
      throw new NotFoundError("User not found");
    }
    return details;
  } catch (e) {}
};
