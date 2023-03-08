import { AppError } from "./../../errors";
import { Category, RealEstate } from "./../../entities";
import { AppDataSource } from "./../../data-source";
export const retriverEstatesByCategoryService = async (id: number) => {
    const categoriesRepo = AppDataSource.getRepository(Category);
    const estatesRepo = AppDataSource.getRepository(RealEstate);

    if (!(await categoriesRepo.findOneBy({ id: id }))) {
        throw new AppError("Category not found", 404);
    }

    const estatesByCategories = await estatesRepo.find({
        relations: {
            category: true,
        },
        where: {
            category: {
                id: id,
            },
        },
    });

    return estatesByCategories;
};
