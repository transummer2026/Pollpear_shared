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
import { VoteCreateNestedManyWithoutCreatedByInputObjectSchema as VoteCreateNestedManyWithoutCreatedByInputObjectSchema } from './VoteCreateNestedManyWithoutCreatedByInput.schema';
import { MessageCreateNestedManyWithoutAuthorInputObjectSchema as MessageCreateNestedManyWithoutAuthorInputObjectSchema } from './MessageCreateNestedManyWithoutAuthorInput.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema as NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema';
import { PollTemplateCreateNestedManyWithoutUserInputObjectSchema as PollTemplateCreateNestedManyWithoutUserInputObjectSchema } from './PollTemplateCreateNestedManyWithoutUserInput.schema';
import { RoomMemberCreateNestedManyWithoutUserInputObjectSchema as RoomMemberCreateNestedManyWithoutUserInputObjectSchema } from './RoomMemberCreateNestedManyWithoutUserInput.schema';
import { InvitationCreateNestedManyWithoutInviterInputObjectSchema as InvitationCreateNestedManyWithoutInviterInputObjectSchema } from './InvitationCreateNestedManyWithoutInviterInput.schema';
import { FriendshipCreateNestedManyWithoutRequesterInputObjectSchema as FriendshipCreateNestedManyWithoutRequesterInputObjectSchema } from './FriendshipCreateNestedManyWithoutRequesterInput.schema';
import { FriendshipCreateNestedManyWithoutAddresseeInputObjectSchema as FriendshipCreateNestedManyWithoutAddresseeInputObjectSchema } from './FriendshipCreateNestedManyWithoutAddresseeInput.schema';
import { BlockCreateNestedManyWithoutBlockerInputObjectSchema as BlockCreateNestedManyWithoutBlockerInputObjectSchema } from './BlockCreateNestedManyWithoutBlockerInput.schema';
import { BlockCreateNestedManyWithoutBlockedInputObjectSchema as BlockCreateNestedManyWithoutBlockedInputObjectSchema } from './BlockCreateNestedManyWithoutBlockedInput.schema';
import { ReportCreateNestedManyWithoutReporterInputObjectSchema as ReportCreateNestedManyWithoutReporterInputObjectSchema } from './ReportCreateNestedManyWithoutReporterInput.schema';
import { ReportCreateNestedManyWithoutReportedInputObjectSchema as ReportCreateNestedManyWithoutReportedInputObjectSchema } from './ReportCreateNestedManyWithoutReportedInput.schema';
import { ApiKeyCreateNestedManyWithoutUserInputObjectSchema as ApiKeyCreateNestedManyWithoutUserInputObjectSchema } from './ApiKeyCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  username: z.string().max(32),
  name: z.string().max(255).optional().nullable(),
  surname: z.string().max(255).optional().nullable(),
  email: z.string().max(255),
  birthdate: z.coerce.date(),
  passwordHash: z.string().max(255),
  role: UserRoleSchema,
  gender: GenderSchema,
  nationality: z.string().max(255),
  city: z.string().max(255).optional().nullable(),
  state: z.string().max(255).optional().nullable(),
  country: z.string().max(255).optional().nullable(),
  company: z.string().max(255).optional().nullable(),
  bio: z.string().max(255).optional().nullable(),
  score: z.number().int().optional(),
  isOnline: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  visibility: VisibilitySchema.optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  lastSeenAt: z.coerce.date().optional().nullable(),
  avatarUrl: z.string().max(255).optional(),
  bannerUrl: z.string().max(255).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userTheme: UserThemeSchema,
  oauths: z.lazy(() => OauthCreateNestedManyWithoutUserInputObjectSchema).optional(),
  bansReceived: z.lazy(() => BanCreateNestedManyWithoutUserInputObjectSchema).optional(),
  bansDone: z.lazy(() => BanCreateNestedManyWithoutBannedByInputObjectSchema).optional(),
  bansLifted: z.lazy(() => BanCreateNestedManyWithoutUnbannedByInputObjectSchema).optional(),
  pollsCreated: z.lazy(() => PollCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  roomsCreated: z.lazy(() => RoomCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  votes: z.lazy(() => VoteCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateCreateNestedManyWithoutUserInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberCreateNestedManyWithoutUserInputObjectSchema).optional(),
  invitationsSent: z.lazy(() => InvitationCreateNestedManyWithoutInviterInputObjectSchema).optional(),
  friendshipsRequested: z.lazy(() => FriendshipCreateNestedManyWithoutRequesterInputObjectSchema).optional(),
  friendshipsReceived: z.lazy(() => FriendshipCreateNestedManyWithoutAddresseeInputObjectSchema).optional(),
  blocksGiven: z.lazy(() => BlockCreateNestedManyWithoutBlockerInputObjectSchema).optional(),
  blocksReceived: z.lazy(() => BlockCreateNestedManyWithoutBlockedInputObjectSchema).optional(),
  reportsGiven: z.lazy(() => ReportCreateNestedManyWithoutReporterInputObjectSchema).optional(),
  reportsReceived: z.lazy(() => ReportCreateNestedManyWithoutReportedInputObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutInvitationsReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutInvitationsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutInvitationsReceivedInput>;
export const UserCreateWithoutInvitationsReceivedInputObjectZodSchema = makeSchema();
