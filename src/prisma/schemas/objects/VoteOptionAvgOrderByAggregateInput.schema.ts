import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  voteId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional()
}).strict();
export const VoteOptionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VoteOptionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionAvgOrderByAggregateInput>;
export const VoteOptionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
