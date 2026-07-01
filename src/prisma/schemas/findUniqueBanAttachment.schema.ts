import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './objects/BanAttachmentWhereUniqueInput.schema';

export const BanAttachmentFindUniqueSchema: z.ZodType<Prisma.BanAttachmentFindUniqueArgs> = z.object({   where: BanAttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanAttachmentFindUniqueArgs>;

export const BanAttachmentFindUniqueZodSchema = z.object({   where: BanAttachmentWhereUniqueInputObjectSchema }).strict();