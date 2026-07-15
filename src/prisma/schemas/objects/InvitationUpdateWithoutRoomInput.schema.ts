import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { EnumInvitationStatusFieldUpdateOperationsInputObjectSchema as EnumInvitationStatusFieldUpdateOperationsInputObjectSchema } from './EnumInvitationStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema as UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutInvitationsSentNestedInput.schema';
import { UserUpdateOneRequiredWithoutInvitationsReceivedNestedInputObjectSchema as UserUpdateOneRequiredWithoutInvitationsReceivedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutInvitationsReceivedNestedInput.schema'

const makeSchema = () => z.object({
  status: z.union([InvitationStatusSchema, z.lazy(() => EnumInvitationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  inviter: z.lazy(() => UserUpdateOneRequiredWithoutInvitationsSentNestedInputObjectSchema).optional(),
  invitee: z.lazy(() => UserUpdateOneRequiredWithoutInvitationsReceivedNestedInputObjectSchema).optional()
}).strict();
export const InvitationUpdateWithoutRoomInputObjectSchema: z.ZodType<Prisma.InvitationUpdateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUpdateWithoutRoomInput>;
export const InvitationUpdateWithoutRoomInputObjectZodSchema = makeSchema();
