import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema';
import { OauthCreateNestedManyWithoutUserInputObjectSchema as OauthCreateNestedManyWithoutUserInputObjectSchema } from './OauthCreateNestedManyWithoutUserInput.schema';
import { PollCreateNestedManyWithoutCreatedByInputObjectSchema as PollCreateNestedManyWithoutCreatedByInputObjectSchema } from './PollCreateNestedManyWithoutCreatedByInput.schema';
import { VoteCreateNestedManyWithoutCreatedByInputObjectSchema as VoteCreateNestedManyWithoutCreatedByInputObjectSchema } from './VoteCreateNestedManyWithoutCreatedByInput.schema';
import { MessageCreateNestedManyWithoutAuthorInputObjectSchema as MessageCreateNestedManyWithoutAuthorInputObjectSchema } from './MessageCreateNestedManyWithoutAuthorInput.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema as NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema';
import { RoomMemberCreateNestedManyWithoutUserInputObjectSchema as RoomMemberCreateNestedManyWithoutUserInputObjectSchema } from './RoomMemberCreateNestedManyWithoutUserInput.schema';
import { InvitationCreateNestedManyWithoutInviterInputObjectSchema as InvitationCreateNestedManyWithoutInviterInputObjectSchema } from './InvitationCreateNestedManyWithoutInviterInput.schema';
import { InvitationCreateNestedManyWithoutInviteeInputObjectSchema as InvitationCreateNestedManyWithoutInviteeInputObjectSchema } from './InvitationCreateNestedManyWithoutInviteeInput.schema';
import { FriendshipCreateNestedManyWithoutUserAInputObjectSchema as FriendshipCreateNestedManyWithoutUserAInputObjectSchema } from './FriendshipCreateNestedManyWithoutUserAInput.schema';
import { FriendshipCreateNestedManyWithoutUserBInputObjectSchema as FriendshipCreateNestedManyWithoutUserBInputObjectSchema } from './FriendshipCreateNestedManyWithoutUserBInput.schema';
import { BlockCreateNestedManyWithoutBlockedInputObjectSchema as BlockCreateNestedManyWithoutBlockedInputObjectSchema } from './BlockCreateNestedManyWithoutBlockedInput.schema';
import { BlockCreateNestedManyWithoutBlockerInputObjectSchema as BlockCreateNestedManyWithoutBlockerInputObjectSchema } from './BlockCreateNestedManyWithoutBlockerInput.schema';
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
  pollsCreated: z.lazy(() => PollCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  votes: z.lazy(() => VoteCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  roomMemberships: z.lazy(() => RoomMemberCreateNestedManyWithoutUserInputObjectSchema).optional(),
  invitationsSent: z.lazy(() => InvitationCreateNestedManyWithoutInviterInputObjectSchema).optional(),
  invitationsReceived: z.lazy(() => InvitationCreateNestedManyWithoutInviteeInputObjectSchema).optional(),
  friendshipsAsUserA: z.lazy(() => FriendshipCreateNestedManyWithoutUserAInputObjectSchema).optional(),
  friendshipsAsUserB: z.lazy(() => FriendshipCreateNestedManyWithoutUserBInputObjectSchema).optional(),
  blocksReceived: z.lazy(() => BlockCreateNestedManyWithoutBlockedInputObjectSchema).optional(),
  blocksGiven: z.lazy(() => BlockCreateNestedManyWithoutBlockerInputObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutRoomsCreatedInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutRoomsCreatedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutRoomsCreatedInput>;
export const UserCreateWithoutRoomsCreatedInputObjectZodSchema = makeSchema();
