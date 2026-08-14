import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema';
import { OauthCreateNestedManyWithoutUserInputObjectSchema as OauthCreateNestedManyWithoutUserInputObjectSchema } from './OauthCreateNestedManyWithoutUserInput.schema';
import { BanCreateNestedManyWithoutUserInputObjectSchema as BanCreateNestedManyWithoutUserInputObjectSchema } from './BanCreateNestedManyWithoutUserInput.schema';
import { BanCreateNestedManyWithoutBannedByInputObjectSchema as BanCreateNestedManyWithoutBannedByInputObjectSchema } from './BanCreateNestedManyWithoutBannedByInput.schema';
import { BanCreateNestedManyWithoutUnbannedByInputObjectSchema as BanCreateNestedManyWithoutUnbannedByInputObjectSchema } from './BanCreateNestedManyWithoutUnbannedByInput.schema';
import { PollCreateNestedManyWithoutCreatedByInputObjectSchema as PollCreateNestedManyWithoutCreatedByInputObjectSchema } from './PollCreateNestedManyWithoutCreatedByInput.schema';
import { RoomCreateNestedManyWithoutCreatedByInputObjectSchema as RoomCreateNestedManyWithoutCreatedByInputObjectSchema } from './RoomCreateNestedManyWithoutCreatedByInput.schema';
import { MessageCreateNestedManyWithoutAuthorInputObjectSchema as MessageCreateNestedManyWithoutAuthorInputObjectSchema } from './MessageCreateNestedManyWithoutAuthorInput.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema as NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema';
import { PollTemplateCreateNestedManyWithoutUserInputObjectSchema as PollTemplateCreateNestedManyWithoutUserInputObjectSchema } from './PollTemplateCreateNestedManyWithoutUserInput.schema';
import { RoomMemberCreateNestedManyWithoutUserInputObjectSchema as RoomMemberCreateNestedManyWithoutUserInputObjectSchema } from './RoomMemberCreateNestedManyWithoutUserInput.schema';
import { InvitationCreateNestedManyWithoutInviterInputObjectSchema as InvitationCreateNestedManyWithoutInviterInputObjectSchema } from './InvitationCreateNestedManyWithoutInviterInput.schema';
import { InvitationCreateNestedManyWithoutInviteeInputObjectSchema as InvitationCreateNestedManyWithoutInviteeInputObjectSchema } from './InvitationCreateNestedManyWithoutInviteeInput.schema';
import { FriendshipCreateNestedManyWithoutRequesterInputObjectSchema as FriendshipCreateNestedManyWithoutRequesterInputObjectSchema } from './FriendshipCreateNestedManyWithoutRequesterInput.schema';
import { FriendshipCreateNestedManyWithoutAddresseeInputObjectSchema as FriendshipCreateNestedManyWithoutAddresseeInputObjectSchema } from './FriendshipCreateNestedManyWithoutAddresseeInput.schema';
import { BlockCreateNestedManyWithoutBlockedInputObjectSchema as BlockCreateNestedManyWithoutBlockedInputObjectSchema } from './BlockCreateNestedManyWithoutBlockedInput.schema';
import { BlockCreateNestedManyWithoutBlockerInputObjectSchema as BlockCreateNestedManyWithoutBlockerInputObjectSchema } from './BlockCreateNestedManyWithoutBlockerInput.schema';
import { ReportCreateNestedManyWithoutReportedInputObjectSchema as ReportCreateNestedManyWithoutReportedInputObjectSchema } from './ReportCreateNestedManyWithoutReportedInput.schema';
import { ReportCreateNestedManyWithoutReporterInputObjectSchema as ReportCreateNestedManyWithoutReporterInputObjectSchema } from './ReportCreateNestedManyWithoutReporterInput.schema';
import { ApiKeyCreateNestedManyWithoutUserInputObjectSchema as ApiKeyCreateNestedManyWithoutUserInputObjectSchema } from './ApiKeyCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
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
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  oauths: z.lazy(() => OauthCreateNestedManyWithoutUserInputObjectSchema).optional(),
  bansReceived: z.lazy(() => BanCreateNestedManyWithoutUserInputObjectSchema).optional(),
  bansGiven: z.lazy(() => BanCreateNestedManyWithoutBannedByInputObjectSchema).optional(),
  bansLifted: z.lazy(() => BanCreateNestedManyWithoutUnbannedByInputObjectSchema).optional(),
  pollsCreated: z.lazy(() => PollCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  roomsCreated: z.lazy(() => RoomCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateCreateNestedManyWithoutUserInputObjectSchema).optional(),
  roomMemberships: z.lazy(() => RoomMemberCreateNestedManyWithoutUserInputObjectSchema).optional(),
  invitationsSent: z.lazy(() => InvitationCreateNestedManyWithoutInviterInputObjectSchema).optional(),
  invitationsReceived: z.lazy(() => InvitationCreateNestedManyWithoutInviteeInputObjectSchema).optional(),
  friendshipsRequested: z.lazy(() => FriendshipCreateNestedManyWithoutRequesterInputObjectSchema).optional(),
  friendshipsReceived: z.lazy(() => FriendshipCreateNestedManyWithoutAddresseeInputObjectSchema).optional(),
  blocksReceived: z.lazy(() => BlockCreateNestedManyWithoutBlockedInputObjectSchema).optional(),
  blocksGiven: z.lazy(() => BlockCreateNestedManyWithoutBlockerInputObjectSchema).optional(),
  reportsReceived: z.lazy(() => ReportCreateNestedManyWithoutReportedInputObjectSchema).optional(),
  reportsGiven: z.lazy(() => ReportCreateNestedManyWithoutReporterInputObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutVotesInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutVotesInput>;
export const UserCreateWithoutVotesInputObjectZodSchema = makeSchema();
