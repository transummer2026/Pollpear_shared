import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  pollId: z.literal(true).optional()
}).strict();
export const PollTemplateAvgAggregateInputObjectSchema: z.ZodType<Prisma.PollTemplateAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateAvgAggregateInputType>;
export const PollTemplateAvgAggregateInputObjectZodSchema = makeSchema();
