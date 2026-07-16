import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const votescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VoteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  label: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  createdById: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const VoteScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VoteScalarWhereWithAggregatesInput> = votescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VoteScalarWhereWithAggregatesInput>;
export const VoteScalarWhereWithAggregatesInputObjectZodSchema = votescalarwherewithaggregatesinputSchema;
