import UpdateLocationModel from "../model/updateLocation";
import BadRequestError from "../errors/badRequestError";

export const updateLocation = async (
  id: number,
  params: { latitude: number; longitude: number }
) => {
  const result = await UpdateLocationModel.updateLocation(id, params);
  if (!result) {
    throw new BadRequestError("Location not updated");
  }
  return result;
};
