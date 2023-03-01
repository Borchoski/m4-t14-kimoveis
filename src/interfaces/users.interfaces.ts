import { User } from "./../entities/users.entities";
import { Repository } from "typeorm";
import {
    createUserSchema,
    createUserSchemaReturn,
} from "../schemas/users.schemas";
import { z } from "zod";

type IUser = z.infer<typeof createUserSchema>;
type IUserReturn = z.infer<typeof createUserSchemaReturn>;
type IUserRepo = Repository<User>;
type IMultipleUsers = Array<IUserReturn>;

export type { IUser, IUserReturn, IUserRepo, IMultipleUsers };
