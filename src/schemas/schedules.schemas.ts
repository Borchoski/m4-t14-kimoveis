import { z } from "zod";

export const createSchedule = z.object({
    date: z.date(),
    hour: z.string(),
    propertie: z.number().int(),
});
