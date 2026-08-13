import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { EnumInvitationStatusFieldUpdateOperationsInputObjectSchema as EnumInvitationStatusFieldUpdateOperationsInputObjectSchema } from './EnumInvitationStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { RoomUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema as RoomUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema } from './RoomUpdateOneRequiredWithoutInvitationsNestedInput.schema';
import { UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema as UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutInvitationsSentNestedInput.schema'

const makeSchema = () => z.object({
  status: z.union([InvitationStatusSchema, z.lazy(() => EnumInvitationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutInvitationsNestedInputObjectSchema).optional(),
  inviter: z.lazy(() => UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema).optional()
}).strict();
export const InvitationUpdateWithoutInviteeInputObjectSchema: z.ZodType<Prisma.InvitationUpdateWithoutInviteeInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpdateWithoutInviteeInput>;
export const InvitationUpdateWithoutInviteeInputObjectZodSchema = makeSchema();
