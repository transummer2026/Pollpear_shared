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
export const ReportSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportSumOrderByAggregateInput>;
export const ReportSumOrderByAggregateInputObjectZodSchema = makeSchema();
