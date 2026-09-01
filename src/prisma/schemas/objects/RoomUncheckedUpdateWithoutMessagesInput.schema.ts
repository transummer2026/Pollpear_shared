import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema as EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { EnumRoomStatusFieldUpdateOperationsInputObjectSchema as EnumRoomStatusFieldUpdateOperationsInputObjectSchema } from './EnumRoomStatusFieldUpdateOperationsInput.schema';
import { PollUncheckedUpdateManyWithoutRoomNestedInputObjectSchema as PollUncheckedUpdateManyWithoutRoomNestedInputObjectSchema } from './PollUncheckedUpdateManyWithoutRoomNestedInput.schema';
import { InvitationUncheckedUpdateManyWithoutRoomNestedInputObjectSchema as InvitationUncheckedUpdateManyWithoutRoomNestedInputObjectSchema } from './InvitationUncheckedUpdateManyWithoutRoomNestedInput.schema';
import { RoomMemberUncheckedUpdateManyWithoutRoomNestedInputObjectSchema as RoomMemberUncheckedUpdateManyWithoutRoomNestedInputObjectSchema } from './RoomMemberUncheckedUpdateManyWithoutRoomNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bannerUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  endsAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  visibility: z.union([VisibilitySchema, z.lazy(() => EnumVisibilityFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([RoomStatusSchema, z.lazy(() => EnumRoomStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdById: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  polls: z.lazy(() => PollUncheckedUpdateManyWithoutRoomNestedInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationUncheckedUpdateManyWithoutRoomNestedInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberUncheckedUpdateManyWithoutRoomNestedInputObjectSchema).optional()
}).strict();
export const RoomUncheckedUpdateWithoutMessagesInputObjectSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUncheckedUpdateWithoutMessagesInput>;
export const RoomUncheckedUpdateWithoutMessagesInputObjectZodSchema = makeSchema();
