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
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { RoomNullableScalarRelationFilterObjectSchema as RoomNullableScalarRelationFilterObjectSchema } from './RoomNullableScalarRelationFilter.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { VoteListRelationFilterObjectSchema as VoteListRelationFilterObjectSchema } from './VoteListRelationFilter.schema';
import { OptionListRelationFilterObjectSchema as OptionListRelationFilterObjectSchema } from './OptionListRelationFilter.schema';
import { PollHashtagListRelationFilterObjectSchema as PollHashtagListRelationFilterObjectSchema } from './PollHashtagListRelationFilter.schema';
import { PollTemplateListRelationFilterObjectSchema as PollTemplateListRelationFilterObjectSchema } from './PollTemplateListRelationFilter.schema';
import { ReportListRelationFilterObjectSchema as ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema';
import { PollDependencyListRelationFilterObjectSchema as PollDependencyListRelationFilterObjectSchema } from './PollDependencyListRelationFilter.schema'

const pollwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PollWhereInputObjectSchema), z.lazy(() => PollWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollWhereInputObjectSchema), z.lazy(() => PollWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
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
  roomId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdBy: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  room: z.union([z.lazy(() => RoomNullableScalarRelationFilterObjectSchema), z.lazy(() => RoomWhereInputObjectSchema)]).optional(),
  votes: z.lazy(() => VoteListRelationFilterObjectSchema).optional(),
  options: z.lazy(() => OptionListRelationFilterObjectSchema).optional(),
  pollHashtags: z.lazy(() => PollHashtagListRelationFilterObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateListRelationFilterObjectSchema).optional(),
  reports: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  childDependencies: z.lazy(() => PollDependencyListRelationFilterObjectSchema).optional()
}).strict();
export const PollWhereInputObjectSchema: z.ZodType<Prisma.PollWhereInput> = pollwhereinputSchema as unknown as z.ZodType<Prisma.PollWhereInput>;
export const PollWhereInputObjectZodSchema = pollwhereinputSchema;
