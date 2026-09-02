import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  pollId: z.number().int()
}).strict();
export const PollTemplateUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PollTemplateUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUncheckedCreateWithoutUserInput>;
export const PollTemplateUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
