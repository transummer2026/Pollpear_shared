import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  voteId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional()
}).strict();
export const VoteOptionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VoteOptionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCountOrderByAggregateInput>;
export const VoteOptionCountOrderByAggregateInputObjectZodSchema = makeSchema();
