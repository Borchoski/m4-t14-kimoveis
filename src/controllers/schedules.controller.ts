import { createSchedulesServices } from "./../services/schedules/newSchedules.services";
import { Request, Response } from "express";

export const createSchedulesController = async (
    req: Request,
    res: Response
) => {
    const token: string = req.headers.authorization!;
    const newSchedules = await createSchedulesServices(req.body, token);
};
