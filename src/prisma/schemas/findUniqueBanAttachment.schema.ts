import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentSelectObjectSchema as BanAttachmentSelectObjectSchema } from './objects/BanAttachmentSelect.schema';
import { BanAttachmentIncludeObjectSchema as BanAttachmentIncludeObjectSchema } from './objects/BanAttachmentInclude.schema';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './objects/BanAttachmentWhereUniqueInput.schema';

export const BanAttachmentFindUniqueSchema: z.ZodType<Prisma.BanAttachmentFindUniqueArgs> = z.object({ select: BanAttachmentSelectObjectSchema.optional(), include: BanAttachmentIncludeObjectSchema.optional(), where: BanAttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanAttachmentFindUniqueArgs>;

export const BanAttachmentFindUniqueZodSchema = z.object({ select: BanAttachmentSelectObjectSchema.optional(), include: BanAttachmentIncludeObjectSchema.optional(), where: BanAttachmentWhereUniqueInputObjectSchema }).strict();