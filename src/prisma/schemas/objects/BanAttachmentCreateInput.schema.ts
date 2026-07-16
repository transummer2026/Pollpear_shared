import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCreateNestedOneWithoutAttachmentsInputObjectSchema as BanCreateNestedOneWithoutAttachmentsInputObjectSchema } from './BanCreateNestedOneWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  attachmentUrl: z.string().max(255),
  ban: z.lazy(() => BanCreateNestedOneWithoutAttachmentsInputObjectSchema)
}).strict();
export const BanAttachmentCreateInputObjectSchema: z.ZodType<Prisma.BanAttachmentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentCreateInput>;
export const BanAttachmentCreateInputObjectZodSchema = makeSchema();
