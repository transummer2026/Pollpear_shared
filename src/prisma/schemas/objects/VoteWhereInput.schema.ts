import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PollScalarRelationFilterObjectSchema as PollScalarRelationFilterObjectSchema } from './PollScalarRelationFilter.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { VoteOptionListRelationFilterObjectSchema as VoteOptionListRelationFilterObjectSchema } from './VoteOptionListRelationFilter.schema'

const votewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VoteWhereInputObjectSchema), z.lazy(() => VoteWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VoteWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VoteWhereInputObjectSchema), z.lazy(() => VoteWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  freeField: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdById: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  pollId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  poll: z.union([z.lazy(() => PollScalarRelationFilterObjectSchema), z.lazy(() => PollWhereInputObjectSchema)]).optional(),
  createdBy: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  voteOptions: z.lazy(() => VoteOptionListRelationFilterObjectSchema).optional()
}).strict();
export const VoteWhereInputObjectSchema: z.ZodType<Prisma.VoteWhereInput> = votewhereinputSchema as unknown as z.ZodType<Prisma.VoteWhereInput>;
export const VoteWhereInputObjectZodSchema = votewhereinputSchema;
