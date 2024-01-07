import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../config";
import UserModel from "../model/users";
import { ISignUp } from "../interfaces/auth";
import { ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_EXPIRY } from "../constants/jwt";
import BadRequestError from "../errors/badRequestError";
// import UnauthenticatedError from "../error/unauthenticatedError";

const SALT_ROUNDS = 10;

export const signUP = async (body: ISignUp) => {
  const userExists = await UserModel.getAllUsers({ username: body.username });
  if (userExists) {
    throw new BadRequestError("User already exists");
  } else {
    const hashedPassword = bcrypt.hashSync(body.password, SALT_ROUNDS);
    body.password = hashedPassword;
    const data = UserModel.createUser(body);
    return data;
  }
};
