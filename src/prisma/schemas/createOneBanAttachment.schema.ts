import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentUncheckedCreateInputObjectSchema as BanAttachmentUncheckedCreateInputObjectSchema } from './objects/BanAttachmentUncheckedCreateInput.schema';

export const BanAttachmentCreateOneSchema: z.ZodType<Prisma.BanAttachmentCreateArgs> = z.object({   data: BanAttachmentUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanAttachmentCreateArgs>;

export const BanAttachmentCreateOneZodSchema = z.object({   data: BanAttachmentUncheckedCreateInputObjectSchema }).strict();