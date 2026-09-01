import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema as EnumUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumUserRoleFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumGenderFieldUpdateOperationsInputObjectSchema as EnumGenderFieldUpdateOperationsInputObjectSchema } from './EnumGenderFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema as EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema';
import { EnumUserThemeFieldUpdateOperationsInputObjectSchema as EnumUserThemeFieldUpdateOperationsInputObjectSchema } from './EnumUserThemeFieldUpdateOperationsInput.schema';
import { OauthUpdateManyWithoutUserNestedInputObjectSchema as OauthUpdateManyWithoutUserNestedInputObjectSchema } from './OauthUpdateManyWithoutUserNestedInput.schema';
import { PollUpdateManyWithoutCreatedByNestedInputObjectSchema as PollUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PollUpdateManyWithoutCreatedByNestedInput.schema';
import { RoomUpdateManyWithoutCreatedByNestedInputObjectSchema as RoomUpdateManyWithoutCreatedByNestedInputObjectSchema } from './RoomUpdateManyWithoutCreatedByNestedInput.schema';
import { VoteUpdateManyWithoutCreatedByNestedInputObjectSchema as VoteUpdateManyWithoutCreatedByNestedInputObjectSchema } from './VoteUpdateManyWithoutCreatedByNestedInput.schema';
import { MessageUpdateManyWithoutAuthorNestedInputObjectSchema as MessageUpdateManyWithoutAuthorNestedInputObjectSchema } from './MessageUpdateManyWithoutAuthorNestedInput.schema';
import { NotificationUpdateManyWithoutUserNestedInputObjectSchema as NotificationUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUpdateManyWithoutUserNestedInput.schema';
import { RoomMemberUpdateManyWithoutUserNestedInputObjectSchema as RoomMemberUpdateManyWithoutUserNestedInputObjectSchema } from './RoomMemberUpdateManyWithoutUserNestedInput.schema';
import { InvitationUpdateManyWithoutInviterNestedInputObjectSchema as InvitationUpdateManyWithoutInviterNestedInputObjectSchema } from './InvitationUpdateManyWithoutInviterNestedInput.schema';
import { InvitationUpdateManyWithoutInviteeNestedInputObjectSchema as InvitationUpdateManyWithoutInviteeNestedInputObjectSchema } from './InvitationUpdateManyWithoutInviteeNestedInput.schema';
import { FriendshipUpdateManyWithoutUserANestedInputObjectSchema as FriendshipUpdateManyWithoutUserANestedInputObjectSchema } from './FriendshipUpdateManyWithoutUserANestedInput.schema';
import { FriendshipUpdateManyWithoutUserBNestedInputObjectSchema as FriendshipUpdateManyWithoutUserBNestedInputObjectSchema } from './FriendshipUpdateManyWithoutUserBNestedInput.schema';
import { BlockUpdateManyWithoutBlockedNestedInputObjectSchema as BlockUpdateManyWithoutBlockedNestedInputObjectSchema } from './BlockUpdateManyWithoutBlockedNestedInput.schema';
import { BlockUpdateManyWithoutBlockerNestedInputObjectSchema as BlockUpdateManyWithoutBlockerNestedInputObjectSchema } from './BlockUpdateManyWithoutBlockerNestedInput.schema'

const makeSchema = () => z.object({
  username: z.union([z.string().max(32), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  surname: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  birthdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  gender: z.union([GenderSchema, z.lazy(() => EnumGenderFieldUpdateOperationsInputObjectSchema)]).optional(),
  nationality: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  city: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  state: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  country: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  company: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bio: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  score: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isOnline: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isEmailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  visibility: z.union([VisibilitySchema, z.lazy(() => EnumVisibilityFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastSeenAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  avatarUrl: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  bannerUrl: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userTheme: z.union([UserThemeSchema, z.lazy(() => EnumUserThemeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  oauths: z.lazy(() => OauthUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  pollsCreated: z.lazy(() => PollUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  roomsCreated: z.lazy(() => RoomUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  votes: z.lazy(() => VoteUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  roomMemberships: z.lazy(() => RoomMemberUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  invitationsSent: z.lazy(() => InvitationUpdateManyWithoutInviterNestedInputObjectSchema).optional(),
  invitationsReceived: z.lazy(() => InvitationUpdateManyWithoutInviteeNestedInputObjectSchema).optional(),
  friendshipsAsUserA: z.lazy(() => FriendshipUpdateManyWithoutUserANestedInputObjectSchema).optional(),
  friendshipsAsUserB: z.lazy(() => FriendshipUpdateManyWithoutUserBNestedInputObjectSchema).optional(),
  blocksReceived: z.lazy(() => BlockUpdateManyWithoutBlockedNestedInputObjectSchema).optional(),
  blocksGiven: z.lazy(() => BlockUpdateManyWithoutBlockerNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutApiKeysInput>;
export const UserUpdateWithoutApiKeysInputObjectZodSchema = makeSchema();
