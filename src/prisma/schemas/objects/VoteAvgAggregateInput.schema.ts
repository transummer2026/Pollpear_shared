import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  pollId: z.literal(true).optional()
}).strict();
export const VoteAvgAggregateInputObjectSchema: z.ZodType<Prisma.VoteAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoteAvgAggregateInputType>;
export const VoteAvgAggregateInputObjectZodSchema = makeSchema();
