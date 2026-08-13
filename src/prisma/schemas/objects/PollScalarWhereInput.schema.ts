import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumPollTypeFilterObjectSchema as EnumPollTypeFilterObjectSchema } from './EnumPollTypeFilter.schema';
import { PollTypeSchema } from '../enums/PollType.schema';
import { EnumVisibilityFilterObjectSchema as EnumVisibilityFilterObjectSchema } from './EnumVisibilityFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumPollStatusFilterObjectSchema as EnumPollStatusFilterObjectSchema } from './EnumPollStatusFilter.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const pollscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PollScalarWhereInputObjectSchema), z.lazy(() => PollScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollScalarWhereInputObjectSchema), z.lazy(() => PollScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumPollTypeFilterObjectSchema), PollTypeSchema]).optional(),
  visibility: z.union([z.lazy(() => EnumVisibilityFilterObjectSchema), VisibilitySchema]).optional(),
  allowChangeVote: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isAnonymous: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  status: z.union([z.lazy(() => EnumPollStatusFilterObjectSchema), PollStatusSchema]).optional(),
  publishedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  endsAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdById: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  roomId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const PollScalarWhereInputObjectSchema: z.ZodType<Prisma.PollScalarWhereInput> = pollscalarwhereinputSchema as unknown as z.ZodType<Prisma.PollScalarWhereInput>;
export const PollScalarWhereInputObjectZodSchema = pollscalarwhereinputSchema;
