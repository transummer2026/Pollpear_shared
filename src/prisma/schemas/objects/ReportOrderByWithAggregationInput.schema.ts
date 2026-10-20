import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportCountOrderByAggregateInputObjectSchema as ReportCountOrderByAggregateInputObjectSchema } from './ReportCountOrderByAggregateInput.schema';
import { ReportAvgOrderByAggregateInputObjectSchema as ReportAvgOrderByAggregateInputObjectSchema } from './ReportAvgOrderByAggregateInput.schema';
import { ReportMaxOrderByAggregateInputObjectSchema as ReportMaxOrderByAggregateInputObjectSchema } from './ReportMaxOrderByAggregateInput.schema';
import { ReportMinOrderByAggregateInputObjectSchema as ReportMinOrderByAggregateInputObjectSchema } from './ReportMinOrderByAggregateInput.schema';
import { ReportSumOrderByAggregateInputObjectSchema as ReportSumOrderByAggregateInputObjectSchema } from './ReportSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reporterId: SortOrderSchema.optional(),
  reportedId: SortOrderSchema.optional(),
  roomId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  messageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pollId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  optionId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hashtagId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReportCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportOrderByWithAggregationInput>;
export const ReportOrderByWithAggregationInputObjectZodSchema = makeSchema();
