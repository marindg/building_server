import { getUserById } from "@/service/user.service";
import { Request, Response } from "express";

export const getUserDetails = async (
  req: Request,
  res: Response
) => {
  try {
    const { idclerk } = req.body;

    const user = await getUserById({ idclerk });

    res.send({ user });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur interne est survenue",
      error: error.message,
    });
  }
};
