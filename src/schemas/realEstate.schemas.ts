import { z } from "zod";

export const createRealEstateSchema = z.object({
    value: z.number(),
    size: z.number().int(),
    address: z.object({
        street: z.string(),
        zipCode: z.string(),
        number: z.string().optional(),
        city: z.string(),
        state: z.string().max(2),
    }),
    category: z.number(),
});
