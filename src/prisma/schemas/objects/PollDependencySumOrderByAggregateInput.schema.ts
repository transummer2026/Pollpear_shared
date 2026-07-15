import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  childPollId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional()
}).strict();
export const PollDependencySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PollDependencySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencySumOrderByAggregateInput>;
export const PollDependencySumOrderByAggregateInputObjectZodSchema = makeSchema();
