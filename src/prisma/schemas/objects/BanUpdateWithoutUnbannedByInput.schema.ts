import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutBansReceivedNestedInputObjectSchema as UserUpdateOneRequiredWithoutBansReceivedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBansReceivedNestedInput.schema';
import { UserUpdateOneRequiredWithoutBansGivenNestedInputObjectSchema as UserUpdateOneRequiredWithoutBansGivenNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutBansGivenNestedInput.schema';
import { BanAttachmentUpdateManyWithoutBanNestedInputObjectSchema as BanAttachmentUpdateManyWithoutBanNestedInputObjectSchema } from './BanAttachmentUpdateManyWithoutBanNestedInput.schema'

const makeSchema = () => z.object({
  banReason: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  unbanReason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  startedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  endedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBansReceivedNestedInputObjectSchema).optional(),
  bannedBy: z.lazy(() => UserUpdateOneRequiredWithoutBansGivenNestedInputObjectSchema).optional(),
  attachments: z.lazy(() => BanAttachmentUpdateManyWithoutBanNestedInputObjectSchema).optional()
}).strict();
export const BanUpdateWithoutUnbannedByInputObjectSchema: z.ZodType<Prisma.BanUpdateWithoutUnbannedByInput> = makeSchema() as unknown as z.ZodType<Prisma.BanUpdateWithoutUnbannedByInput>;
export const BanUpdateWithoutUnbannedByInputObjectZodSchema = makeSchema();
