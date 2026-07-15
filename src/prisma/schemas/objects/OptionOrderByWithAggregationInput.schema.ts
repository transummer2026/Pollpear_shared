import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OptionCountOrderByAggregateInputObjectSchema as OptionCountOrderByAggregateInputObjectSchema } from './OptionCountOrderByAggregateInput.schema';
import { OptionAvgOrderByAggregateInputObjectSchema as OptionAvgOrderByAggregateInputObjectSchema } from './OptionAvgOrderByAggregateInput.schema';
import { OptionMaxOrderByAggregateInputObjectSchema as OptionMaxOrderByAggregateInputObjectSchema } from './OptionMaxOrderByAggregateInput.schema';
import { OptionMinOrderByAggregateInputObjectSchema as OptionMinOrderByAggregateInputObjectSchema } from './OptionMinOrderByAggregateInput.schema';
import { OptionSumOrderByAggregateInputObjectSchema as OptionSumOrderByAggregateInputObjectSchema } from './OptionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  sliderLeftLabel: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sliderRightLabel: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  order: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional(),
  _count: z.lazy(() => OptionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OptionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OptionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OptionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OptionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OptionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OptionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionOrderByWithAggregationInput>;
export const OptionOrderByWithAggregationInputObjectZodSchema = makeSchema();
