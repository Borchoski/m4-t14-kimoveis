import { createCategorySchema } from "./../schemas/category.schemas";
import { verifyData } from "./../middlewares/verifyData.middlewares";
import { verifyPermission } from "./../middlewares/veryfyPermission.middlewares";
import {
    createCategoryController,
    retriveCategoriesController,
} from "./../controllers/categories.controllers";
import { Router } from "express";

export const categoriesRouter: Router = Router();

categoriesRouter.post(
    "",
    verifyPermission,
    verifyData(createCategorySchema),
    createCategoryController
);
categoriesRouter.get("", retriveCategoriesController);
