import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  childPollId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional()
}).strict();
export const PollDependencyMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PollDependencyMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyMinOrderByAggregateInput>;
export const PollDependencyMinOrderByAggregateInputObjectZodSchema = makeSchema();
