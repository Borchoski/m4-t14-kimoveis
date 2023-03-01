import { z } from "zod";

export const createRealEstateSchema = z.object({
    value: z.number(),
    size: z.number().int(),
    address: z.number(),
    categoryId: z.number(),
});
