import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional()
}).strict();
export const PollTemplateMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PollTemplateMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateMinOrderByAggregateInput>;
export const PollTemplateMinOrderByAggregateInputObjectZodSchema = makeSchema();
