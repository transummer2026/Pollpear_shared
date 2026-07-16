import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentSelectObjectSchema as BanAttachmentSelectObjectSchema } from './objects/BanAttachmentSelect.schema';
import { BanAttachmentUpdateManyMutationInputObjectSchema as BanAttachmentUpdateManyMutationInputObjectSchema } from './objects/BanAttachmentUpdateManyMutationInput.schema';
import { BanAttachmentWhereInputObjectSchema as BanAttachmentWhereInputObjectSchema } from './objects/BanAttachmentWhereInput.schema';

export const BanAttachmentUpdateManyAndReturnSchema: z.ZodType<Prisma.BanAttachmentUpdateManyAndReturnArgs> = z.object({ select: BanAttachmentSelectObjectSchema.optional(), data: BanAttachmentUpdateManyMutationInputObjectSchema, where: BanAttachmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanAttachmentUpdateManyAndReturnArgs>;

export const BanAttachmentUpdateManyAndReturnZodSchema = z.object({ select: BanAttachmentSelectObjectSchema.optional(), data: BanAttachmentUpdateManyMutationInputObjectSchema, where: BanAttachmentWhereInputObjectSchema.optional() }).strict();