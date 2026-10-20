import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  userId: z.number().int(),
  pollId: z.number().int()
}).strict();
export const PollTemplateUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PollTemplateUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUncheckedCreateInput>;
export const PollTemplateUncheckedCreateInputObjectZodSchema = makeSchema();
