import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  voteId: z.literal(true).optional(),
  optionId: z.literal(true).optional()
}).strict();
export const VoteOptionSumAggregateInputObjectSchema: z.ZodType<Prisma.VoteOptionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionSumAggregateInputType>;
export const VoteOptionSumAggregateInputObjectZodSchema = makeSchema();
