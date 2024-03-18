import {
  createUserService,
  deleteUserService,
  getUserService,
  getUsersService,
  updateActiveUserService,
} from "@/service/user.service";
import {
  createUserDTO,
  deleteUserDTO,
  getUserDTO,
  updateActiveUserDTO,
} from "@/types/user.dto";
import { Request, Response } from "express";

export const getUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { idclerk }: getUserDTO = req.body;

    const user = await getUserService({ idclerk });

    res.send({ user });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur interne est survenue",
      error: error.message,
    });
  }
};

export const getUsers = async (
  _req: Request,
  res: Response
) => {
  try {
    const users = await getUsersService();

    res.send({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur interne est survenue",
      error: error.message,
    });
  }
};

export const createUser = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      avatarUrl,
      email,
      role,
      agencyId,
      idclerk,
    }: createUserDTO = req.body;

    const user = await createUserService({
      name,
      avatarUrl,
      email,
      role,
      agencyId,
      idclerk,
    });

    res.send({ user });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur interne est survenue",
      error: error.message,
    });
  }
};

export const updateActiveUser = async (
  req: Request,
  res: Response
) => {
  try {
    const { idclerk, active }: updateActiveUserDTO =
      req.body;

    await updateActiveUserService({
      idclerk,
      active,
    });

    const newUser = await getUserService({ idclerk });

    res.send({ newUser });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur interne est survenue",
      error: error.message,
    });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
) => {
  try {
    const { idclerk }: deleteUserDTO = req.body;

    const user = await deleteUserService({ idclerk });

    res.send({ user });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur interne est survenue",
      error: error.message,
    });
  }
};
