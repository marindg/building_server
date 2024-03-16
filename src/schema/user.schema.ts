import { userDetailsDTO } from "@/types/user.dto";
import Joi, { ObjectSchema } from "joi";

export const getUserDetailsSchema: ObjectSchema<userDetailsDTO> =
  Joi.object({
    idclerk: Joi.string().required(),
  });
