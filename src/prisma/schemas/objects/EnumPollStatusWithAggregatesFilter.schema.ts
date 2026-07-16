import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { NestedEnumPollStatusWithAggregatesFilterObjectSchema as NestedEnumPollStatusWithAggregatesFilterObjectSchema } from './NestedEnumPollStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPollStatusFilterObjectSchema as NestedEnumPollStatusFilterObjectSchema } from './NestedEnumPollStatusFilter.schema'

const makeSchema = () => z.object({
  equals: PollStatusSchema.optional(),
  in: PollStatusSchema.array().optional(),
  notIn: PollStatusSchema.array().optional(),
  not: z.union([PollStatusSchema, z.lazy(() => NestedEnumPollStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPollStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPollStatusFilterObjectSchema).optional()
}).strict();
export const EnumPollStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPollStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPollStatusWithAggregatesFilter>;
export const EnumPollStatusWithAggregatesFilterObjectZodSchema = makeSchema();
