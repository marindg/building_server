import { execute } from "@/utils/queries";

export async function getUserById({ idclerk }: any) {
  try {
    const querie = {
      fileName: "getUserById",
      folder: "user",
      params: [idclerk],
    };

    const user = await execute(querie);

    return user;
  } catch (error: unknown) {
    throw error;
  }
}
