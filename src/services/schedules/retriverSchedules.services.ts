import { RealEstate, Schedule } from "./../../entities";
import { AppError } from "./../../errors";
import { AppDataSource } from "./../../data-source";
export const retriverAllSchedulesService = async (id: number) => {
    const scheduleRepo = AppDataSource.getRepository(Schedule);

    if (
        !(await AppDataSource.getRepository(RealEstate).findOneBy({ id: id }))
    ) {
        throw new AppError("RealEstate not found", 404);
    }

    const schedules = await scheduleRepo.find({
        relations: {
            realEstate: true,
        },
        where: {
            realEstate: {
                id: id,
            },
        },
    });

    if (!schedules) {
        throw new AppError("No schedules are found", 409);
    }

    return schedules;
};
