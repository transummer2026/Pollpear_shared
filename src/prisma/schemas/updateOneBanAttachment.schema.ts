import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentUpdateInputObjectSchema as BanAttachmentUpdateInputObjectSchema } from './objects/BanAttachmentUpdateInput.schema';
import { BanAttachmentUncheckedUpdateInputObjectSchema as BanAttachmentUncheckedUpdateInputObjectSchema } from './objects/BanAttachmentUncheckedUpdateInput.schema';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './objects/BanAttachmentWhereUniqueInput.schema';

export const BanAttachmentUpdateOneSchema: z.ZodType<Prisma.BanAttachmentUpdateArgs> = z.object({   data: z.union([BanAttachmentUpdateInputObjectSchema, BanAttachmentUncheckedUpdateInputObjectSchema]), where: BanAttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanAttachmentUpdateArgs>;

export const BanAttachmentUpdateOneZodSchema = z.object({   data: z.union([BanAttachmentUpdateInputObjectSchema, BanAttachmentUncheckedUpdateInputObjectSchema]), where: BanAttachmentWhereUniqueInputObjectSchema }).strict();