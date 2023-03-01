import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.services";
import { retriverUsersServices } from "../services/users/retriverAllUsers";

export const createUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const newUser = await createUserService(req.body);

    return res.status(201).json(newUser);
};

export const retriveUsersController = async (req: Request, res: Response) => {
    const users = await retriverUsersServices();

    return res.json(users);
};
