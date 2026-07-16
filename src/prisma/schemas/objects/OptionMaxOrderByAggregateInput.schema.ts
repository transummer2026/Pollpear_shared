import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  sliderLeftLabel: SortOrderSchema.optional(),
  sliderRightLabel: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional()
}).strict();
export const OptionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OptionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionMaxOrderByAggregateInput>;
export const OptionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
