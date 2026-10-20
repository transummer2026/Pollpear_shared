import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reporterId: SortOrderSchema.optional(),
  reportedId: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  messageId: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional(),
  hashtagId: SortOrderSchema.optional()
}).strict();
export const ReportAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportAvgOrderByAggregateInput>;
export const ReportAvgOrderByAggregateInputObjectZodSchema = makeSchema();
