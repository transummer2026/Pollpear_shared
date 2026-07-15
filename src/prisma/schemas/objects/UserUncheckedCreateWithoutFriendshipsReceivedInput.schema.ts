import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema';
import { OauthUncheckedCreateNestedManyWithoutUserInputObjectSchema as OauthUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OauthUncheckedCreateNestedManyWithoutUserInput.schema';
import { BanUncheckedCreateNestedManyWithoutUserInputObjectSchema as BanUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './BanUncheckedCreateNestedManyWithoutUserInput.schema';
import { BanUncheckedCreateNestedManyWithoutBannedByInputObjectSchema as BanUncheckedCreateNestedManyWithoutBannedByInputObjectSchema } from './BanUncheckedCreateNestedManyWithoutBannedByInput.schema';
import { BanUncheckedCreateNestedManyWithoutUnbannedByInputObjectSchema as BanUncheckedCreateNestedManyWithoutUnbannedByInputObjectSchema } from './BanUncheckedCreateNestedManyWithoutUnbannedByInput.schema';
import { PollUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema as PollUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './PollUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { RoomUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema as RoomUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './RoomUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { VoteUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema as VoteUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './VoteUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema as MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutAuthorInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema as NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutUserInput.schema';
import { PollTemplateUncheckedCreateNestedManyWithoutUserInputObjectSchema as PollTemplateUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PollTemplateUncheckedCreateNestedManyWithoutUserInput.schema';
import { RoomMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema as RoomMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './RoomMemberUncheckedCreateNestedManyWithoutUserInput.schema';
import { InvitationUncheckedCreateNestedManyWithoutInviterInputObjectSchema as InvitationUncheckedCreateNestedManyWithoutInviterInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutInviterInput.schema';
import { InvitationUncheckedCreateNestedManyWithoutInviteeInputObjectSchema as InvitationUncheckedCreateNestedManyWithoutInviteeInputObjectSchema } from './InvitationUncheckedCreateNestedManyWithoutInviteeInput.schema';
import { FriendshipUncheckedCreateNestedManyWithoutRequesterInputObjectSchema as FriendshipUncheckedCreateNestedManyWithoutRequesterInputObjectSchema } from './FriendshipUncheckedCreateNestedManyWithoutRequesterInput.schema';
import { BlockUncheckedCreateNestedManyWithoutBlockerInputObjectSchema as BlockUncheckedCreateNestedManyWithoutBlockerInputObjectSchema } from './BlockUncheckedCreateNestedManyWithoutBlockerInput.schema';
import { BlockUncheckedCreateNestedManyWithoutBlockedInputObjectSchema as BlockUncheckedCreateNestedManyWithoutBlockedInputObjectSchema } from './BlockUncheckedCreateNestedManyWithoutBlockedInput.schema';
import { ReportUncheckedCreateNestedManyWithoutReporterInputObjectSchema as ReportUncheckedCreateNestedManyWithoutReporterInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutReporterInput.schema';
import { ReportUncheckedCreateNestedManyWithoutReportedInputObjectSchema as ReportUncheckedCreateNestedManyWithoutReportedInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutReportedInput.schema';
import { ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema as ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ApiKeyUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string(),
  name: z.string().optional().nullable(),
  surname: z.string().optional().nullable(),
  email: z.string(),
  birthdate: z.coerce.date(),
  passwordHash: z.string(),
  role: UserRoleSchema,
  gender: GenderSchema,
  nationality: z.string(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  score: z.number().int().optional(),
  isOnline: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  visibility: VisibilitySchema.optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  lastSeenAt: z.coerce.date().optional().nullable(),
  avatarUrl: z.string().optional(),
  bannerUrl: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userTheme: UserThemeSchema,
  oauths: z.lazy(() => OauthUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  bansReceived: z.lazy(() => BanUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  bansDone: z.lazy(() => BanUncheckedCreateNestedManyWithoutBannedByInputObjectSchema).optional(),
  bansLifted: z.lazy(() => BanUncheckedCreateNestedManyWithoutUnbannedByInputObjectSchema).optional(),
  pollsCreated: z.lazy(() => PollUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  roomsCreated: z.lazy(() => RoomUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  invitationsSent: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutInviterInputObjectSchema).optional(),
  invitationsReceived: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutInviteeInputObjectSchema).optional(),
  friendshipsRequested: z.lazy(() => FriendshipUncheckedCreateNestedManyWithoutRequesterInputObjectSchema).optional(),
  blocksGiven: z.lazy(() => BlockUncheckedCreateNestedManyWithoutBlockerInputObjectSchema).optional(),
  blocksReceived: z.lazy(() => BlockUncheckedCreateNestedManyWithoutBlockedInputObjectSchema).optional(),
  reportsGiven: z.lazy(() => ReportUncheckedCreateNestedManyWithoutReporterInputObjectSchema).optional(),
  reportsReceived: z.lazy(() => ReportUncheckedCreateNestedManyWithoutReportedInputObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutFriendshipsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutFriendshipsReceivedInput>;
export const UserUncheckedCreateWithoutFriendshipsReceivedInputObjectZodSchema = makeSchema();
