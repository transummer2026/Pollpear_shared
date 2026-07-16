import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumPollTypeWithAggregatesFilterObjectSchema as EnumPollTypeWithAggregatesFilterObjectSchema } from './EnumPollTypeWithAggregatesFilter.schema';
import { PollTypeSchema } from '../enums/PollType.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { EnumVisibilityWithAggregatesFilterObjectSchema as EnumVisibilityWithAggregatesFilterObjectSchema } from './EnumVisibilityWithAggregatesFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumPollStatusWithAggregatesFilterObjectSchema as EnumPollStatusWithAggregatesFilterObjectSchema } from './EnumPollStatusWithAggregatesFilter.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const pollscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PollScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PollScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PollScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumPollTypeWithAggregatesFilterObjectSchema), PollTypeSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  publishedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  endsAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  visibility: z.union([z.lazy(() => EnumVisibilityWithAggregatesFilterObjectSchema), VisibilitySchema]).optional(),
  allowChangeVote: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  isAnonymous: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => EnumPollStatusWithAggregatesFilterObjectSchema), PollStatusSchema]).optional(),
  createdById: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  roomId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const PollScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PollScalarWhereWithAggregatesInput> = pollscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PollScalarWhereWithAggregatesInput>;
export const PollScalarWhereWithAggregatesInputObjectZodSchema = pollscalarwherewithaggregatesinputSchema;
