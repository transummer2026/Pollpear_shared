import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './objects/BanAttachmentWhereUniqueInput.schema';

export const BanAttachmentDeleteOneSchema: z.ZodType<Prisma.BanAttachmentDeleteArgs> = z.object({   where: BanAttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanAttachmentDeleteArgs>;

export const BanAttachmentDeleteOneZodSchema = z.object({   where: BanAttachmentWhereUniqueInputObjectSchema }).strict();