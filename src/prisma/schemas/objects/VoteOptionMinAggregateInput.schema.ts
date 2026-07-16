import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  voteId: z.literal(true).optional(),
  optionId: z.literal(true).optional()
}).strict();
export const VoteOptionMinAggregateInputObjectSchema: z.ZodType<Prisma.VoteOptionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionMinAggregateInputType>;
export const VoteOptionMinAggregateInputObjectZodSchema = makeSchema();
