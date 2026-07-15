import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional()
}).strict();
export const OptionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OptionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionAvgOrderByAggregateInput>;
export const OptionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
