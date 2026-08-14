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
import { FriendshipUncheckedCreateNestedManyWithoutAddresseeInputObjectSchema as FriendshipUncheckedCreateNestedManyWithoutAddresseeInputObjectSchema } from './FriendshipUncheckedCreateNestedManyWithoutAddresseeInput.schema';
import { BlockUncheckedCreateNestedManyWithoutBlockedInputObjectSchema as BlockUncheckedCreateNestedManyWithoutBlockedInputObjectSchema } from './BlockUncheckedCreateNestedManyWithoutBlockedInput.schema';
import { BlockUncheckedCreateNestedManyWithoutBlockerInputObjectSchema as BlockUncheckedCreateNestedManyWithoutBlockerInputObjectSchema } from './BlockUncheckedCreateNestedManyWithoutBlockerInput.schema';
import { ReportUncheckedCreateNestedManyWithoutReportedInputObjectSchema as ReportUncheckedCreateNestedManyWithoutReportedInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutReportedInput.schema';
import { ReportUncheckedCreateNestedManyWithoutReporterInputObjectSchema as ReportUncheckedCreateNestedManyWithoutReporterInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutReporterInput.schema';
import { ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema as ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ApiKeyUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  username: z.string().max(32),
  name: z.string().max(255).optional().nullable(),
  surname: z.string().max(255).optional().nullable(),
  email: z.string().max(255),
  birthdate: z.coerce.date(),
  passwordHash: z.string().max(255),
  role: UserRoleSchema.optional(),
  gender: GenderSchema,
  nationality: z.string().max(255),
  city: z.string().max(255).optional().nullable(),
  state: z.string().max(255).optional().nullable(),
  country: z.string().max(255).optional().nullable(),
  company: z.string().max(255).optional().nullable(),
  bio: z.string().max(255).optional().nullable(),
  score: z.number().int().optional(),
  isOnline: z.boolean().optional(),
  isEmailVerified: z.boolean().optional(),
  visibility: VisibilitySchema.optional(),
  lastSeenAt: z.coerce.date().optional().nullable(),
  avatarUrl: z.string().max(255).optional(),
  bannerUrl: z.string().max(255).optional(),
  userTheme: UserThemeSchema.optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  oauths: z.lazy(() => OauthUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  bansReceived: z.lazy(() => BanUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  bansGiven: z.lazy(() => BanUncheckedCreateNestedManyWithoutBannedByInputObjectSchema).optional(),
  bansLifted: z.lazy(() => BanUncheckedCreateNestedManyWithoutUnbannedByInputObjectSchema).optional(),
  pollsCreated: z.lazy(() => PollUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  roomsCreated: z.lazy(() => RoomUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  roomMemberships: z.lazy(() => RoomMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  invitationsSent: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutInviterInputObjectSchema).optional(),
  invitationsReceived: z.lazy(() => InvitationUncheckedCreateNestedManyWithoutInviteeInputObjectSchema).optional(),
  friendshipsRequested: z.lazy(() => FriendshipUncheckedCreateNestedManyWithoutRequesterInputObjectSchema).optional(),
  friendshipsReceived: z.lazy(() => FriendshipUncheckedCreateNestedManyWithoutAddresseeInputObjectSchema).optional(),
  blocksReceived: z.lazy(() => BlockUncheckedCreateNestedManyWithoutBlockedInputObjectSchema).optional(),
  blocksGiven: z.lazy(() => BlockUncheckedCreateNestedManyWithoutBlockerInputObjectSchema).optional(),
  reportsReceived: z.lazy(() => ReportUncheckedCreateNestedManyWithoutReportedInputObjectSchema).optional(),
  reportsGiven: z.lazy(() => ReportUncheckedCreateNestedManyWithoutReporterInputObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
