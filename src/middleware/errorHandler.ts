import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";

import BadRequestError from "../errors/badRequestError";

export function genericErrorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction // eslint-disable-line
) {
  if (err instanceof BadRequestError) {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: err.message });
  }
  return res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
}
