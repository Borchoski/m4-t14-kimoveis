import { createUserSchema } from "./../schemas/users.schemas";
import { verifyData } from "./../middlewares/verifyData.middlewares";
import {
    createUserController,
    retriveUsersController,
} from "./../controllers/users.controllers";
import { Router } from "express";

export const usersRouter: Router = Router();

usersRouter.post("", verifyData(createUserSchema), createUserController);
usersRouter.get("", retriveUsersController);
