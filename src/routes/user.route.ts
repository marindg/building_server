import * as userController from "@/controller/user.controller";
import { validate } from "@/middleware/validate";
import * as userSchema from "@/schema/user.schema";
import { Router } from "express";

const userRouter: Router = Router();
//localhost:3003/user

http: userRouter.get(
  "/",
  validate(userSchema.getUserSchema),
  userController.getUser
);

userRouter.get(
  "/all",
  validate(userSchema.getUsersSchema),
  userController.getUsers
);

userRouter.post(
  "/",
  validate(userSchema.createUserSchema),
  userController.createUser
);

userRouter.patch(
  "/active",
  validate(userSchema.updateActiveUserSchema),
  userController.updateActiveUser
);

userRouter.delete(
  "/",
  validate(userSchema.deleteUserSchema),
  userController.deleteUser
);

export default userRouter;
