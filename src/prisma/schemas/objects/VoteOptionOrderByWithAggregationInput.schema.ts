import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VoteOptionCountOrderByAggregateInputObjectSchema as VoteOptionCountOrderByAggregateInputObjectSchema } from './VoteOptionCountOrderByAggregateInput.schema';
import { VoteOptionAvgOrderByAggregateInputObjectSchema as VoteOptionAvgOrderByAggregateInputObjectSchema } from './VoteOptionAvgOrderByAggregateInput.schema';
import { VoteOptionMaxOrderByAggregateInputObjectSchema as VoteOptionMaxOrderByAggregateInputObjectSchema } from './VoteOptionMaxOrderByAggregateInput.schema';
import { VoteOptionMinOrderByAggregateInputObjectSchema as VoteOptionMinOrderByAggregateInputObjectSchema } from './VoteOptionMinOrderByAggregateInput.schema';
import { VoteOptionSumOrderByAggregateInputObjectSchema as VoteOptionSumOrderByAggregateInputObjectSchema } from './VoteOptionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  voteId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional(),
  _count: z.lazy(() => VoteOptionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => VoteOptionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VoteOptionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VoteOptionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => VoteOptionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VoteOptionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VoteOptionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionOrderByWithAggregationInput>;
export const VoteOptionOrderByWithAggregationInputObjectZodSchema = makeSchema();
