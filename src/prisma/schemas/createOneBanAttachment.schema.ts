import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentSelectObjectSchema as BanAttachmentSelectObjectSchema } from './objects/BanAttachmentSelect.schema';
import { BanAttachmentIncludeObjectSchema as BanAttachmentIncludeObjectSchema } from './objects/BanAttachmentInclude.schema';
import { BanAttachmentCreateInputObjectSchema as BanAttachmentCreateInputObjectSchema } from './objects/BanAttachmentCreateInput.schema';
import { BanAttachmentUncheckedCreateInputObjectSchema as BanAttachmentUncheckedCreateInputObjectSchema } from './objects/BanAttachmentUncheckedCreateInput.schema';

export const BanAttachmentCreateOneSchema: z.ZodType<Prisma.BanAttachmentCreateArgs> = z.object({ select: BanAttachmentSelectObjectSchema.optional(), include: BanAttachmentIncludeObjectSchema.optional(), data: z.union([BanAttachmentCreateInputObjectSchema, BanAttachmentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BanAttachmentCreateArgs>;

export const BanAttachmentCreateOneZodSchema = z.object({ select: BanAttachmentSelectObjectSchema.optional(), include: BanAttachmentIncludeObjectSchema.optional(), data: z.union([BanAttachmentCreateInputObjectSchema, BanAttachmentUncheckedCreateInputObjectSchema]) }).strict();