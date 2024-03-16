import * as userController from "@/controller/user.controller";
import { validate } from "@/middleware/validate";
import * as userSchema from "@/schema/user.schema";
import { Router } from "express";

const userRouter: Router = Router();

userRouter.post(
  "/",
  validate(userSchema.getUserDetailsSchema),
  userController.getUserDetails
);

export default userRouter;
