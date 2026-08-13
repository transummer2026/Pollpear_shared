import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema';
import { EnumInvitationStatusFieldUpdateOperationsInputObjectSchema as EnumInvitationStatusFieldUpdateOperationsInputObjectSchema } from './EnumInvitationStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([InvitationStatusSchema, z.lazy(() => EnumInvitationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  roomId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  inviteeId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const InvitationUncheckedUpdateWithoutInviterInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedUpdateWithoutInviterInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedUpdateWithoutInviterInput>;
export const InvitationUncheckedUpdateWithoutInviterInputObjectZodSchema = makeSchema();
