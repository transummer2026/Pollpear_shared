import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  blockerId: SortOrderSchema.optional(),
  blockedId: SortOrderSchema.optional()
}).strict();
export const BlockCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BlockCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockCountOrderByAggregateInput>;
export const BlockCountOrderByAggregateInputObjectZodSchema = makeSchema();
