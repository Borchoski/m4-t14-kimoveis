import { verifyData, verifyUserId } from "../middlewares";
import { createUserSchema, updateUserSchema } from "./../schemas/users.schemas";
import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    retriveUsersController,
    updateUserController,
} from "./../controllers/users.controllers";

export const usersRouter: Router = Router();

usersRouter.post("", verifyData(createUserSchema), createUserController);
usersRouter.get("", retriveUsersController);
usersRouter.patch(
    "/:id",
    verifyData(updateUserSchema),
    verifyUserId,
    updateUserController
);
usersRouter.delete("/:id", verifyUserId, deleteUserController);
