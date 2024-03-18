import {
  createUserDTO,
  deleteUserDTO,
  getUserDTO,
  updateActiveUserDTO,
} from "@/types/user.dto";
import { execute } from "@/utils/queries";

export async function getUserService({
  idclerk,
}: getUserDTO) {
  try {
    const querie = {
      fileName: "getUser",
      folder: "user",
      params: [idclerk],
    };

    const user = await execute(querie);

    return user;
  } catch (error: unknown) {
    throw error;
  }
}

export async function getUsersService() {
  try {
    const querie = {
      fileName: "getUsers",
      folder: "user",
    };

    const user = await execute(querie);

    return user;
  } catch (error: unknown) {
    throw error;
  }
}

export async function createUserService({
  name,
  avatarUrl,
  email,
  role,
  agencyId,
  idclerk,
}: createUserDTO) {
  try {
    const querie = {
      fileName: "createUser",
      folder: "user",
      params: [
        name,
        avatarUrl,
        email,
        role,
        agencyId,
        idclerk,
      ],
    };

    const user = await execute(querie);

    return user;
  } catch (error: unknown) {
    throw error;
  }
}

export async function updateActiveUserService({
  idclerk,
  active,
}: updateActiveUserDTO) {
  try {
    const querie = {
      fileName: "updateActiveUser",
      folder: "user",
      params: [idclerk, active ? "1" : "0"],
    };

    const user = await execute(querie);

    return user;
  } catch (error: unknown) {
    throw error;
  }
}

export async function deleteUserService({
  idclerk,
}: deleteUserDTO) {
  try {
    const querie = {
      fileName: "deleteUser",
      folder: "user",
      params: [idclerk],
    };

    const user = await execute(querie);

    return user;
  } catch (error: unknown) {
    throw error;
  }
}
