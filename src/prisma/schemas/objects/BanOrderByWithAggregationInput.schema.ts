import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BanCountOrderByAggregateInputObjectSchema as BanCountOrderByAggregateInputObjectSchema } from './BanCountOrderByAggregateInput.schema';
import { BanAvgOrderByAggregateInputObjectSchema as BanAvgOrderByAggregateInputObjectSchema } from './BanAvgOrderByAggregateInput.schema';
import { BanMaxOrderByAggregateInputObjectSchema as BanMaxOrderByAggregateInputObjectSchema } from './BanMaxOrderByAggregateInput.schema';
import { BanMinOrderByAggregateInputObjectSchema as BanMinOrderByAggregateInputObjectSchema } from './BanMinOrderByAggregateInput.schema';
import { BanSumOrderByAggregateInputObjectSchema as BanSumOrderByAggregateInputObjectSchema } from './BanSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  banReason: SortOrderSchema.optional(),
  unbanReason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  startedAt: SortOrderSchema.optional(),
  endedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  bannedById: SortOrderSchema.optional(),
  unbannedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => BanCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BanAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BanMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BanMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BanSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BanOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BanOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BanOrderByWithAggregationInput>;
export const BanOrderByWithAggregationInputObjectZodSchema = makeSchema();
