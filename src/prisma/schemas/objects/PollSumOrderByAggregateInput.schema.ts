import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional()
}).strict();
export const PollSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PollSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollSumOrderByAggregateInput>;
export const PollSumOrderByAggregateInputObjectZodSchema = makeSchema();
