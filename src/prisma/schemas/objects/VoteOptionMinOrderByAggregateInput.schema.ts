import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  voteId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional()
}).strict();
export const VoteOptionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VoteOptionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionMinOrderByAggregateInput>;
export const VoteOptionMinOrderByAggregateInputObjectZodSchema = makeSchema();
