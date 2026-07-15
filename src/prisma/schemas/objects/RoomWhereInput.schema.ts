import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumVisibilityFilterObjectSchema as EnumVisibilityFilterObjectSchema } from './EnumVisibilityFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumRoomStatusFilterObjectSchema as EnumRoomStatusFilterObjectSchema } from './EnumRoomStatusFilter.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { PollListRelationFilterObjectSchema as PollListRelationFilterObjectSchema } from './PollListRelationFilter.schema';
import { MessageListRelationFilterObjectSchema as MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema';
import { InvitationListRelationFilterObjectSchema as InvitationListRelationFilterObjectSchema } from './InvitationListRelationFilter.schema';
import { RoomMemberListRelationFilterObjectSchema as RoomMemberListRelationFilterObjectSchema } from './RoomMemberListRelationFilter.schema';
import { ReportListRelationFilterObjectSchema as ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema'

const roomwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoomWhereInputObjectSchema), z.lazy(() => RoomWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoomWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoomWhereInputObjectSchema), z.lazy(() => RoomWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  publishedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  bannerUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  visibility: z.union([z.lazy(() => EnumVisibilityFilterObjectSchema), VisibilitySchema]).optional(),
  status: z.union([z.lazy(() => EnumRoomStatusFilterObjectSchema), RoomStatusSchema]).optional(),
  createdById: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdBy: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  polls: z.lazy(() => PollListRelationFilterObjectSchema).optional(),
  messages: z.lazy(() => MessageListRelationFilterObjectSchema).optional(),
  invitations: z.lazy(() => InvitationListRelationFilterObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberListRelationFilterObjectSchema).optional(),
  reports: z.lazy(() => ReportListRelationFilterObjectSchema).optional()
}).strict();
export const RoomWhereInputObjectSchema: z.ZodType<Prisma.RoomWhereInput> = roomwhereinputSchema as unknown as z.ZodType<Prisma.RoomWhereInput>;
export const RoomWhereInputObjectZodSchema = roomwhereinputSchema;
