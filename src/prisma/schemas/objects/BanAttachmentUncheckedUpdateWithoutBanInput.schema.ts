import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  attachmentUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const BanAttachmentUncheckedUpdateWithoutBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentUncheckedUpdateWithoutBanInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUncheckedUpdateWithoutBanInput>;
export const BanAttachmentUncheckedUpdateWithoutBanInputObjectZodSchema = makeSchema();
