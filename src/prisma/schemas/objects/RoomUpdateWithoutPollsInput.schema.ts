import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema as EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { EnumRoomStatusFieldUpdateOperationsInputObjectSchema as EnumRoomStatusFieldUpdateOperationsInputObjectSchema } from './EnumRoomStatusFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutRoomsCreatedNestedInputObjectSchema as UserUpdateOneRequiredWithoutRoomsCreatedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRoomsCreatedNestedInput.schema';
import { MessageUpdateManyWithoutRoomNestedInputObjectSchema as MessageUpdateManyWithoutRoomNestedInputObjectSchema } from './MessageUpdateManyWithoutRoomNestedInput.schema';
import { InvitationUpdateManyWithoutRoomNestedInputObjectSchema as InvitationUpdateManyWithoutRoomNestedInputObjectSchema } from './InvitationUpdateManyWithoutRoomNestedInput.schema';
import { RoomMemberUpdateManyWithoutRoomNestedInputObjectSchema as RoomMemberUpdateManyWithoutRoomNestedInputObjectSchema } from './RoomMemberUpdateManyWithoutRoomNestedInput.schema';
import { ReportUpdateManyWithoutRoomNestedInputObjectSchema as ReportUpdateManyWithoutRoomNestedInputObjectSchema } from './ReportUpdateManyWithoutRoomNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bannerUrl: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  publishedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  visibility: z.union([VisibilitySchema, z.lazy(() => EnumVisibilityFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([RoomStatusSchema, z.lazy(() => EnumRoomStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutRoomsCreatedNestedInputObjectSchema).optional(),
  messages: z.lazy(() => MessageUpdateManyWithoutRoomNestedInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationUpdateManyWithoutRoomNestedInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberUpdateManyWithoutRoomNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutRoomNestedInputObjectSchema).optional()
}).strict();
export const RoomUpdateWithoutPollsInputObjectSchema: z.ZodType<Prisma.RoomUpdateWithoutPollsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateWithoutPollsInput>;
export const RoomUpdateWithoutPollsInputObjectZodSchema = makeSchema();
