import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema as EnumUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumUserRoleFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumGenderFieldUpdateOperationsInputObjectSchema as EnumGenderFieldUpdateOperationsInputObjectSchema } from './EnumGenderFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema as EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserThemeSchema } from '../enums/UserTheme.schema';
import { EnumUserThemeFieldUpdateOperationsInputObjectSchema as EnumUserThemeFieldUpdateOperationsInputObjectSchema } from './EnumUserThemeFieldUpdateOperationsInput.schema';
import { OauthUncheckedUpdateManyWithoutUserNestedInputObjectSchema as OauthUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './OauthUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PollUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema as PollUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PollUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { RoomUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema as RoomUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './RoomUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { VoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema as VoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './VoteUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema as MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutAuthorNestedInput.schema';
import { NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema as NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { RoomMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema as RoomMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './RoomMemberUncheckedUpdateManyWithoutUserNestedInput.schema';
import { InvitationUncheckedUpdateManyWithoutInviterNestedInputObjectSchema as InvitationUncheckedUpdateManyWithoutInviterNestedInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutInviterNestedInput.schema';
import { InvitationUncheckedUpdateManyWithoutInviteeNestedInputObjectSchema as InvitationUncheckedUpdateManyWithoutInviteeNestedInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutInviteeNestedInput.schema';
import { FriendshipUncheckedUpdateManyWithoutUserANestedInputObjectSchema as FriendshipUncheckedUpdateManyWithoutUserANestedInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutUserANestedInput.schema';
import { FriendshipUncheckedUpdateManyWithoutUserBNestedInputObjectSchema as FriendshipUncheckedUpdateManyWithoutUserBNestedInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutUserBNestedInput.schema';
import { BlockUncheckedUpdateManyWithoutBlockedNestedInputObjectSchema as BlockUncheckedUpdateManyWithoutBlockedNestedInputObjectSchema } from './BlockUncheckedUpdateManyWithoutBlockedNestedInput.schema';
import { BlockUncheckedUpdateManyWithoutBlockerNestedInputObjectSchema as BlockUncheckedUpdateManyWithoutBlockerNestedInputObjectSchema } from './BlockUncheckedUpdateManyWithoutBlockerNestedInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ApiKeyUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  oauths: z.lazy(() => OauthUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  pollsCreated: z.lazy(() => PollUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  roomsCreated: z.lazy(() => RoomUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  votes: z.lazy(() => VoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  roomMemberships: z.lazy(() => RoomMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  invitationsSent: z.lazy(() => InvitationUncheckedUpdateManyWithoutInviterNestedInputObjectSchema).optional(),
  invitationsReceived: z.lazy(() => InvitationUncheckedUpdateManyWithoutInviteeNestedInputObjectSchema).optional(),
  friendshipsAsUserA: z.lazy(() => FriendshipUncheckedUpdateManyWithoutUserANestedInputObjectSchema).optional(),
  friendshipsAsUserB: z.lazy(() => FriendshipUncheckedUpdateManyWithoutUserBNestedInputObjectSchema).optional(),
  blocksReceived: z.lazy(() => BlockUncheckedUpdateManyWithoutBlockedNestedInputObjectSchema).optional(),
  blocksGiven: z.lazy(() => BlockUncheckedUpdateManyWithoutBlockerNestedInputObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateInput>;
export const UserUncheckedUpdateInputObjectZodSchema = makeSchema();
