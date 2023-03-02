import { Schedule } from "./../../entities/shedulesUsersPropertis.entities";
import { AppDataSource } from "./../../data-source";
import { verify } from "jsonwebtoken";
import { AppError } from "../../errors";
export const createSchedulesServices = async (userDate: any, token: string) => {
    const scheduleRepo = AppDataSource.getRepository(Schedule);

    let id = 0;

    verify(
        token,
        String(process.env.SECRET_KEY),
        async (error: any, decoded: any) => {
            if (error) throw new AppError(error.message, 401);
            id = decoded.id;
        }
    );

    userDate = {
        ...userDate,
    };

    scheduleRepo.create();

    console.log(userDate);
};
