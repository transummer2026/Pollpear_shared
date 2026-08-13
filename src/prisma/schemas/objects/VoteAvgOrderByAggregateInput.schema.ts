import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional()
}).strict();
export const VoteAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VoteAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteAvgOrderByAggregateInput>;
export const VoteAvgOrderByAggregateInputObjectZodSchema = makeSchema();
