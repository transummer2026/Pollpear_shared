import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  voteId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional()
}).strict();
export const VoteOptionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VoteOptionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionMaxOrderByAggregateInput>;
export const VoteOptionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
