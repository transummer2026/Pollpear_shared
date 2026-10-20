import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  userId: z.number().int()
}).strict();
export const PollTemplateUncheckedCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateUncheckedCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUncheckedCreateWithoutPollInput>;
export const PollTemplateUncheckedCreateWithoutPollInputObjectZodSchema = makeSchema();
