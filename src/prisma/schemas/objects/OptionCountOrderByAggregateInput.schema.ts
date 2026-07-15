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
export const OptionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OptionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCountOrderByAggregateInput>;
export const OptionCountOrderByAggregateInputObjectZodSchema = makeSchema();
