import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import config from "../config";

import UnauthenticatedError from "../errors/unauthenticatedError";

export const auth = async (req: any, _res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] as string;

    if (!token) {
      throw new UnauthenticatedError("No access token");
    }

    const decode = jwt.verify(token, config.jwt.accessTokenSecret!);
    req.user = decode;
    next();
  } catch (err) {
    next(err);
  }
};
