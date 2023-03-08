import { retriverAllSchedulesService } from "./../services/schedules/retriverSchedules.services";
import { createSchedulesServices } from "./../services/schedules/newSchedules.services";
import { Request, Response } from "express";

export const createSchedulesController = async (
    req: Request,
    res: Response
) => {
    const token: string = req.headers.authorization!;
    const newSchedules = await createSchedulesServices(req.body, token);

    return res.json(newSchedules);
};

export const retriverAllSchedulesController = async (
    req: Request,
    res: Response
) => {
    const schedules = await retriverAllSchedulesService(+req.params.id);

    return res.json(schedules);
};
