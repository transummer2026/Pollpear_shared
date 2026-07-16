import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  attachmentUrl: z.string()
}).strict();
export const BanAttachmentUncheckedCreateWithoutBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentUncheckedCreateWithoutBanInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUncheckedCreateWithoutBanInput>;
export const BanAttachmentUncheckedCreateWithoutBanInputObjectZodSchema = makeSchema();
