import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  attachmentUrl: z.string().max(255)
}).strict();
export const BanAttachmentCreateWithoutBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentCreateWithoutBanInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentCreateWithoutBanInput>;
export const BanAttachmentCreateWithoutBanInputObjectZodSchema = makeSchema();
