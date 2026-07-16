import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  attachmentUrl: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const BanAttachmentUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.BanAttachmentUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUpdateManyMutationInput>;
export const BanAttachmentUpdateManyMutationInputObjectZodSchema = makeSchema();
