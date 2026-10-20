import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  pollId: z.number().int()
}).strict();
export const PollTemplateCreateManyUserInputObjectSchema: z.ZodType<Prisma.PollTemplateCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateManyUserInput>;
export const PollTemplateCreateManyUserInputObjectZodSchema = makeSchema();
