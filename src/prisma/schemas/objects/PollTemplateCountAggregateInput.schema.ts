import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  pollId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PollTemplateCountAggregateInputObjectSchema: z.ZodType<Prisma.PollTemplateCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCountAggregateInputType>;
export const PollTemplateCountAggregateInputObjectZodSchema = makeSchema();
