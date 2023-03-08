import { AppError } from "./../../errors";
import { User } from "./../../entities/users.entities";
import { AppDataSource } from "./../../data-source";
import { IUserPartial } from "../../interfaces";
import { createUserSchemaReturn } from "../../schemas";

export const updateUserService = async (
    userData: IUserPartial,
    id: number,
    userReq: any
) => {
    const userRepo = AppDataSource.getRepository(User);

    if (userData.email) {
        if (
            await userRepo.findOneBy({
                name: userData.name!,
            })
        ) {
            throw new AppError("Email already exists.", 409);
        }
    }

    if (userReq.admin == false) {
        if (userData.email != userReq.email) {
            throw new AppError("Nao pode hein", 403);
        }

        const userAdmin = await userRepo.findOneBy({ id: id });
        if (userAdmin!.admin == true) {
            throw new AppError("Nao pode hein", 403);
        }

        const oldData = await userRepo.findOneBy({
            id: id,
        });
        const user = userRepo.create({
            ...oldData,
            ...userData,
        });

        await userRepo.save(user);

        return createUserSchemaReturn.parse(user);
    }

    const oldData = await userRepo.findOneBy({
        id: id,
    });
    const user = userRepo.create({
        ...oldData,
        ...userData,
    });

    await userRepo.save(user);

    return createUserSchemaReturn.parse(user);
};
