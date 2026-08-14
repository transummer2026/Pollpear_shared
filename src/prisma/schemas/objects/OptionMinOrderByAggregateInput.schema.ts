import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  sliderLeftLabel: SortOrderSchema.optional(),
  sliderRightLabel: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional()
}).strict();
export const OptionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OptionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionMinOrderByAggregateInput>;
export const OptionMinOrderByAggregateInputObjectZodSchema = makeSchema();
