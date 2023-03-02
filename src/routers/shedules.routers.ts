import { createSchedulesController } from "./../controllers/schedules.controller";
import { Router } from "express";

export const shedulesRouter: Router = Router();

shedulesRouter.post("", createSchedulesController);
