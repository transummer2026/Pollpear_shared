import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentUpdateManyMutationInputObjectSchema as BanAttachmentUpdateManyMutationInputObjectSchema } from './objects/BanAttachmentUpdateManyMutationInput.schema';
import { BanAttachmentWhereInputObjectSchema as BanAttachmentWhereInputObjectSchema } from './objects/BanAttachmentWhereInput.schema';

export const BanAttachmentUpdateManySchema: z.ZodType<Prisma.BanAttachmentUpdateManyArgs> = z.object({ data: BanAttachmentUpdateManyMutationInputObjectSchema, where: BanAttachmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanAttachmentUpdateManyArgs>;

export const BanAttachmentUpdateManyZodSchema = z.object({ data: BanAttachmentUpdateManyMutationInputObjectSchema, where: BanAttachmentWhereInputObjectSchema.optional() }).strict();