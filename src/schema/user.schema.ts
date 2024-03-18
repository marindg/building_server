import {
  createUserDTO,
  deleteUserDTO,
  getUserDTO,
  getUsersDTO,
  updateActiveUserDTO,
} from "@/types/user.dto";
import Joi, { ObjectSchema } from "joi";

export const getUserSchema: ObjectSchema<getUserDTO> =
  Joi.object({
    idclerk: Joi.string().required(),
  });

export const getUsersSchema: ObjectSchema<getUsersDTO> =
  Joi.object({});

export const updateActiveUserSchema: ObjectSchema<updateActiveUserDTO> =
  Joi.object({
    idclerk: Joi.string().required(),
    active: Joi.boolean().required(),
  });

export const createUserSchema: ObjectSchema<createUserDTO> =
  Joi.object({
    name: Joi.string().required(),
    avatarUrl: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().required(),
    agencyId: Joi.string().allow(null).required(),
    idclerk: Joi.string().required(),
  });

export const deleteUserSchema: ObjectSchema<deleteUserDTO> =
  Joi.object({
    idclerk: Joi.string().required(),
  });
