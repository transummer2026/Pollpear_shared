import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BanUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema as BanUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema } from './BanUpdateOneRequiredWithoutAttachmentsNestedInput.schema'

const makeSchema = () => z.object({
  attachmentUrl: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ban: z.lazy(() => BanUpdateOneRequiredWithoutAttachmentsNestedInputObjectSchema).optional()
}).strict();
export const BanAttachmentUpdateInputObjectSchema: z.ZodType<Prisma.BanAttachmentUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUpdateInput>;
export const BanAttachmentUpdateInputObjectZodSchema = makeSchema();
