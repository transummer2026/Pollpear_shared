import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional()
}).strict();
export const MessageSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MessageSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageSumOrderByAggregateInput>;
export const MessageSumOrderByAggregateInputObjectZodSchema = makeSchema();
