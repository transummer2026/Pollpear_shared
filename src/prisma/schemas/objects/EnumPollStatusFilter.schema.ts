import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { NestedEnumPollStatusFilterObjectSchema as NestedEnumPollStatusFilterObjectSchema } from './NestedEnumPollStatusFilter.schema'

const makeSchema = () => z.object({
  equals: PollStatusSchema.optional(),
  in: PollStatusSchema.array().optional(),
  notIn: PollStatusSchema.array().optional(),
  not: z.union([PollStatusSchema, z.lazy(() => NestedEnumPollStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumPollStatusFilterObjectSchema: z.ZodType<Prisma.EnumPollStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPollStatusFilter>;
export const EnumPollStatusFilterObjectZodSchema = makeSchema();
