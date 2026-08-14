import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  childPollId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional()
}).strict();
export const PollDependencyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PollDependencyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyAvgOrderByAggregateInput>;
export const PollDependencyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
