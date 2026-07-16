import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional()
}).strict();
export const PollAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PollAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollAvgOrderByAggregateInput>;
export const PollAvgOrderByAggregateInputObjectZodSchema = makeSchema();
