import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BlockCountOrderByAggregateInputObjectSchema as BlockCountOrderByAggregateInputObjectSchema } from './BlockCountOrderByAggregateInput.schema';
import { BlockAvgOrderByAggregateInputObjectSchema as BlockAvgOrderByAggregateInputObjectSchema } from './BlockAvgOrderByAggregateInput.schema';
import { BlockMaxOrderByAggregateInputObjectSchema as BlockMaxOrderByAggregateInputObjectSchema } from './BlockMaxOrderByAggregateInput.schema';
import { BlockMinOrderByAggregateInputObjectSchema as BlockMinOrderByAggregateInputObjectSchema } from './BlockMinOrderByAggregateInput.schema';
import { BlockSumOrderByAggregateInputObjectSchema as BlockSumOrderByAggregateInputObjectSchema } from './BlockSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  blockerId: SortOrderSchema.optional(),
  blockedId: SortOrderSchema.optional(),
  _count: z.lazy(() => BlockCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BlockAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BlockMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BlockMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BlockSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BlockOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BlockOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockOrderByWithAggregationInput>;
export const BlockOrderByWithAggregationInputObjectZodSchema = makeSchema();
