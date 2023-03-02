import { verifyPermission } from "./../middlewares/veryfyPermission.middlewares";
import { createRealEstateSchema } from "./../schemas/realEstate.schemas";
import { verifyData } from "./../middlewares/verifyData.middlewares";
import {
    createRealEstateController,
    retriverEstatesController,
} from "./../controllers/realEstate.controllers";
import { Router } from "express";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
    "",
    verifyData(createRealEstateSchema),
    verifyPermission,
    createRealEstateController
);

realEstateRouter.get("", retriverEstatesController);
