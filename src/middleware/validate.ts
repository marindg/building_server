import { sendResponse } from "@/utils/responseHandler";
import { httpStatusCodes } from "constant";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function validate(schema: Joi.ObjectSchema) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { error } = schema.validate(req.body, {
      context: (req as Request & { user: any }).user!,
    });
    if (error) {
      sendResponse(
        res,
        httpStatusCodes.BAD_REQUEST,
        "error",
        error.details[0].message
      );
    } else {
      next();
    }
  };
}
