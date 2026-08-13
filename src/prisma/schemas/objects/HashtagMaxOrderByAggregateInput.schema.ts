import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const HashtagMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HashtagMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagMaxOrderByAggregateInput>;
export const HashtagMaxOrderByAggregateInputObjectZodSchema = makeSchema();
