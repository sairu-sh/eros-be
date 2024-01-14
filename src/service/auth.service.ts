import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../config";
import UserModel from "../model/users.model";
import { ISignUp } from "../interfaces/auth.interface";
import { ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_EXPIRY } from "../constants/jwt";
import BadRequestError from "../errors/badRequestError";
// import UnauthenticatedError from "../error/unauthenticatedError";

const SALT_ROUNDS = 10;

export const signUP = async (body: ISignUp) => {
  const userExists = await UserModel.getUsers({
    username: body.username,
  });
  if (userExists) {
    throw new BadRequestError("User already exists");
  } else {
    const emailExists = await UserModel.getUsers({
      email: body.email,
    });
    if (emailExists) {
      throw new BadRequestError("Email already exists");
    }
  }
  const hashedPassword = bcrypt.hashSync(body.password, SALT_ROUNDS);
  body.password = hashedPassword;
  const data = UserModel.createUser(body);
  return data;
};

export const login = async (body: ISignUp) => {
  const user = await UserModel.getByEmail(body.email);

  if (!user) {
    throw new BadRequestError("Invalid Email or Password");
  }

  const passwordMatch = await bcrypt.compare(body.password, user.password);

  if (!passwordMatch) {
    throw new BadRequestError("Invalid Email or Password");
  }

  const accessToken = jwt.sign(user, config.jwt.accessTokenSecret!, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });

  const refreshToken = jwt.sign(user, config.jwt.refreshTokenSecret!, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });

  return {
    accessToken,
    refreshToken,
  };
};
