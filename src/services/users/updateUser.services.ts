import { AppError } from "./../../errors";
import { User } from "./../../entities/users.entities";
import { AppDataSource } from "./../../data-source";
import { IUserPartial } from "../../interfaces";
import { createUserSchemaReturn } from "../../schemas";

export const updateUserService = async (userData: IUserPartial, id: number) => {
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
