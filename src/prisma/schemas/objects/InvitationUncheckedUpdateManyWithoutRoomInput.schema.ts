import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { EnumInvitationStatusFieldUpdateOperationsInputObjectSchema as EnumInvitationStatusFieldUpdateOperationsInputObjectSchema } from './EnumInvitationStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([InvitationStatusSchema, z.lazy(() => EnumInvitationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  inviterId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  inviteeId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const InvitationUncheckedUpdateManyWithoutRoomInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutRoomInput>;
export const InvitationUncheckedUpdateManyWithoutRoomInputObjectZodSchema = makeSchema();
