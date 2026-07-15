import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentWhereInputObjectSchema as BanAttachmentWhereInputObjectSchema } from './objects/BanAttachmentWhereInput.schema';

export const BanAttachmentDeleteManySchema: z.ZodType<Prisma.BanAttachmentDeleteManyArgs> = z.object({ where: BanAttachmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanAttachmentDeleteManyArgs>;

export const BanAttachmentDeleteManyZodSchema = z.object({ where: BanAttachmentWhereInputObjectSchema.optional() }).strict();