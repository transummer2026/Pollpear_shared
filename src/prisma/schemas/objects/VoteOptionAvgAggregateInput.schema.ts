import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  voteId: z.literal(true).optional(),
  optionId: z.literal(true).optional()
}).strict();
export const VoteOptionAvgAggregateInputObjectSchema: z.ZodType<Prisma.VoteOptionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionAvgAggregateInputType>;
export const VoteOptionAvgAggregateInputObjectZodSchema = makeSchema();
