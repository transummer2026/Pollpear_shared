import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reporterId: SortOrderSchema.optional(),
  reportedId: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  messageId: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional(),
  hashtagId: SortOrderSchema.optional()
}).strict();
export const ReportMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportMinOrderByAggregateInput>;
export const ReportMinOrderByAggregateInputObjectZodSchema = makeSchema();
