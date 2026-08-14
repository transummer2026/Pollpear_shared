import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { VoteCountOrderByAggregateInputObjectSchema as VoteCountOrderByAggregateInputObjectSchema } from './VoteCountOrderByAggregateInput.schema';
import { VoteAvgOrderByAggregateInputObjectSchema as VoteAvgOrderByAggregateInputObjectSchema } from './VoteAvgOrderByAggregateInput.schema';
import { VoteMaxOrderByAggregateInputObjectSchema as VoteMaxOrderByAggregateInputObjectSchema } from './VoteMaxOrderByAggregateInput.schema';
import { VoteMinOrderByAggregateInputObjectSchema as VoteMinOrderByAggregateInputObjectSchema } from './VoteMinOrderByAggregateInput.schema';
import { VoteSumOrderByAggregateInputObjectSchema as VoteSumOrderByAggregateInputObjectSchema } from './VoteSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  freeField: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional(),
  _count: z.lazy(() => VoteCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => VoteAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => VoteMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => VoteMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => VoteSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const VoteOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.VoteOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOrderByWithAggregationInput>;
export const VoteOrderByWithAggregationInputObjectZodSchema = makeSchema();
