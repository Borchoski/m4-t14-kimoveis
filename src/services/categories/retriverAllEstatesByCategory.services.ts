import { Category, RealEstate } from "./../../entities";
import { AppDataSource } from "./../../data-source";
export const retriverEstatesByCategoryService = async (id: number) => {
    const categoriesRepo = AppDataSource.getRepository(Category);
    const estatesRepo = AppDataSource.getRepository(RealEstate);

    const category = await categoriesRepo.findOneBy({ id: id });
    const estatesByCategories = await estatesRepo.find({
        relations: {
            category: true,
        },
    });

    const ret = estatesByCategories.filter(
        (el) => el.category.id == category?.id
    );

    return ret;
};
