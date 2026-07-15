import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PollDependencyOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PollDependencyOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyOrderByRelationAggregateInput>;
export const PollDependencyOrderByRelationAggregateInputObjectZodSchema = makeSchema();
