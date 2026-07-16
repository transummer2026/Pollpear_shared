import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  voteId: z.literal(true).optional(),
  optionId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const VoteOptionCountAggregateInputObjectSchema: z.ZodType<Prisma.VoteOptionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCountAggregateInputType>;
export const VoteOptionCountAggregateInputObjectZodSchema = makeSchema();
