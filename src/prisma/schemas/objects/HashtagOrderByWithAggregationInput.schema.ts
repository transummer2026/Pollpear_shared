import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { HashtagCountOrderByAggregateInputObjectSchema as HashtagCountOrderByAggregateInputObjectSchema } from './HashtagCountOrderByAggregateInput.schema';
import { HashtagAvgOrderByAggregateInputObjectSchema as HashtagAvgOrderByAggregateInputObjectSchema } from './HashtagAvgOrderByAggregateInput.schema';
import { HashtagMaxOrderByAggregateInputObjectSchema as HashtagMaxOrderByAggregateInputObjectSchema } from './HashtagMaxOrderByAggregateInput.schema';
import { HashtagMinOrderByAggregateInputObjectSchema as HashtagMinOrderByAggregateInputObjectSchema } from './HashtagMinOrderByAggregateInput.schema';
import { HashtagSumOrderByAggregateInputObjectSchema as HashtagSumOrderByAggregateInputObjectSchema } from './HashtagSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => HashtagCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => HashtagAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => HashtagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => HashtagMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => HashtagSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const HashtagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.HashtagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagOrderByWithAggregationInput>;
export const HashtagOrderByWithAggregationInputObjectZodSchema = makeSchema();
