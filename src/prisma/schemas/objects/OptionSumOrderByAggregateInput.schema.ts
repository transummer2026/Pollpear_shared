import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional()
}).strict();
export const OptionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OptionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionSumOrderByAggregateInput>;
export const OptionSumOrderByAggregateInputObjectZodSchema = makeSchema();
