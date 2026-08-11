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
import { BanUncheckedUpdateManyWithoutUserNestedInputObjectSchema as BanUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './BanUncheckedUpdateManyWithoutUserNestedInput.schema';
import { BanUncheckedUpdateManyWithoutBannedByNestedInputObjectSchema as BanUncheckedUpdateManyWithoutBannedByNestedInputObjectSchema } from './BanUncheckedUpdateManyWithoutBannedByNestedInput.schema';
import { BanUncheckedUpdateManyWithoutUnbannedByNestedInputObjectSchema as BanUncheckedUpdateManyWithoutUnbannedByNestedInputObjectSchema } from './BanUncheckedUpdateManyWithoutUnbannedByNestedInput.schema';
import { PollUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema as PollUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './PollUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { RoomUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema as RoomUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './RoomUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { VoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema as VoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './VoteUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema as MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutAuthorNestedInput.schema';
import { NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema as NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PollTemplateUncheckedUpdateManyWithoutUserNestedInputObjectSchema as PollTemplateUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PollTemplateUncheckedUpdateManyWithoutUserNestedInput.schema';
import { RoomMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema as RoomMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './RoomMemberUncheckedUpdateManyWithoutUserNestedInput.schema';
import { InvitationUncheckedUpdateManyWithoutInviterNestedInputObjectSchema as InvitationUncheckedUpdateManyWithoutInviterNestedInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutInviterNestedInput.schema';
import { InvitationUncheckedUpdateManyWithoutInviteeNestedInputObjectSchema as InvitationUncheckedUpdateManyWithoutInviteeNestedInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutInviteeNestedInput.schema';
import { FriendshipUncheckedUpdateManyWithoutRequesterNestedInputObjectSchema as FriendshipUncheckedUpdateManyWithoutRequesterNestedInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutRequesterNestedInput.schema';
import { FriendshipUncheckedUpdateManyWithoutAddresseeNestedInputObjectSchema as FriendshipUncheckedUpdateManyWithoutAddresseeNestedInputObjectSchema } from './FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput.schema';
import { BlockUncheckedUpdateManyWithoutBlockerNestedInputObjectSchema as BlockUncheckedUpdateManyWithoutBlockerNestedInputObjectSchema } from './BlockUncheckedUpdateManyWithoutBlockerNestedInput.schema';
import { BlockUncheckedUpdateManyWithoutBlockedNestedInputObjectSchema as BlockUncheckedUpdateManyWithoutBlockedNestedInputObjectSchema } from './BlockUncheckedUpdateManyWithoutBlockedNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutReporterNestedInputObjectSchema as ReportUncheckedUpdateManyWithoutReporterNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutReporterNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutReportedNestedInputObjectSchema as ReportUncheckedUpdateManyWithoutReportedNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutReportedNestedInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ApiKeyUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  surname: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  birthdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  gender: z.union([GenderSchema, z.lazy(() => EnumGenderFieldUpdateOperationsInputObjectSchema)]).optional(),
  nationality: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  city: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  state: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  country: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  company: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  score: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isOnline: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isEmailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  visibility: z.union([VisibilitySchema, z.lazy(() => EnumVisibilityFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastSeenAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  avatarUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  bannerUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  userTheme: z.union([UserThemeSchema, z.lazy(() => EnumUserThemeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bansReceived: z.lazy(() => BanUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  bansDone: z.lazy(() => BanUncheckedUpdateManyWithoutBannedByNestedInputObjectSchema).optional(),
  bansLifted: z.lazy(() => BanUncheckedUpdateManyWithoutUnbannedByNestedInputObjectSchema).optional(),
  pollsCreated: z.lazy(() => PollUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  roomsCreated: z.lazy(() => RoomUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  votes: z.lazy(() => VoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  invitationsSent: z.lazy(() => InvitationUncheckedUpdateManyWithoutInviterNestedInputObjectSchema).optional(),
  invitationsReceived: z.lazy(() => InvitationUncheckedUpdateManyWithoutInviteeNestedInputObjectSchema).optional(),
  friendshipsRequested: z.lazy(() => FriendshipUncheckedUpdateManyWithoutRequesterNestedInputObjectSchema).optional(),
  friendshipsReceived: z.lazy(() => FriendshipUncheckedUpdateManyWithoutAddresseeNestedInputObjectSchema).optional(),
  blocksGiven: z.lazy(() => BlockUncheckedUpdateManyWithoutBlockerNestedInputObjectSchema).optional(),
  blocksReceived: z.lazy(() => BlockUncheckedUpdateManyWithoutBlockedNestedInputObjectSchema).optional(),
  reportsGiven: z.lazy(() => ReportUncheckedUpdateManyWithoutReporterNestedInputObjectSchema).optional(),
  reportsReceived: z.lazy(() => ReportUncheckedUpdateManyWithoutReportedNestedInputObjectSchema).optional(),
  apiKeys: z.lazy(() => ApiKeyUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutOauthsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutOauthsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutOauthsInput>;
export const UserUncheckedUpdateWithoutOauthsInputObjectZodSchema = makeSchema();
