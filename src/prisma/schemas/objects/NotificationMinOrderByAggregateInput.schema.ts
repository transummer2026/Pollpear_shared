import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  isRead: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  actorId: SortOrderSchema.optional()
}).strict();
export const NotificationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationMinOrderByAggregateInput>;
export const NotificationMinOrderByAggregateInputObjectZodSchema = makeSchema();
