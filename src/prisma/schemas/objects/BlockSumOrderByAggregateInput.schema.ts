import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  blockerId: SortOrderSchema.optional(),
  blockedId: SortOrderSchema.optional()
}).strict();
export const BlockSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BlockSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockSumOrderByAggregateInput>;
export const BlockSumOrderByAggregateInputObjectZodSchema = makeSchema();
