import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PollCountOrderByAggregateInputObjectSchema as PollCountOrderByAggregateInputObjectSchema } from './PollCountOrderByAggregateInput.schema';
import { PollAvgOrderByAggregateInputObjectSchema as PollAvgOrderByAggregateInputObjectSchema } from './PollAvgOrderByAggregateInput.schema';
import { PollMaxOrderByAggregateInputObjectSchema as PollMaxOrderByAggregateInputObjectSchema } from './PollMaxOrderByAggregateInput.schema';
import { PollMinOrderByAggregateInputObjectSchema as PollMinOrderByAggregateInputObjectSchema } from './PollMinOrderByAggregateInput.schema';
import { PollSumOrderByAggregateInputObjectSchema as PollSumOrderByAggregateInputObjectSchema } from './PollSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  publishedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: SortOrderSchema.optional(),
  endsAt: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  allowChangeVote: SortOrderSchema.optional(),
  isAnonymous: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  roomId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => PollCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PollAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PollMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PollMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PollSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PollOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PollOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PollOrderByWithAggregationInput>;
export const PollOrderByWithAggregationInputObjectZodSchema = makeSchema();
