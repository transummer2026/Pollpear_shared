import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  voteId: z.literal(true).optional(),
  optionId: z.literal(true).optional()
}).strict();
export const VoteOptionMaxAggregateInputObjectSchema: z.ZodType<Prisma.VoteOptionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionMaxAggregateInputType>;
export const VoteOptionMaxAggregateInputObjectZodSchema = makeSchema();
