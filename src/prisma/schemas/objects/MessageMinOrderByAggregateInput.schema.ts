import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional()
}).strict();
export const MessageMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MessageMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageMinOrderByAggregateInput>;
export const MessageMinOrderByAggregateInputObjectZodSchema = makeSchema();
