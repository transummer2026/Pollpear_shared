import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  publishedAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  endsAt: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  allowChangeVote: SortOrderSchema.optional(),
  isAnonymous: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional()
}).strict();
export const PollMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PollMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollMinOrderByAggregateInput>;
export const PollMinOrderByAggregateInputObjectZodSchema = makeSchema();
