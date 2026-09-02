import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentSelectObjectSchema as BanAttachmentSelectObjectSchema } from './objects/BanAttachmentSelect.schema';
import { BanAttachmentIncludeObjectSchema as BanAttachmentIncludeObjectSchema } from './objects/BanAttachmentInclude.schema';
import { BanAttachmentWhereUniqueInputObjectSchema as BanAttachmentWhereUniqueInputObjectSchema } from './objects/BanAttachmentWhereUniqueInput.schema';
import { BanAttachmentCreateInputObjectSchema as BanAttachmentCreateInputObjectSchema } from './objects/BanAttachmentCreateInput.schema';
import { BanAttachmentUncheckedCreateInputObjectSchema as BanAttachmentUncheckedCreateInputObjectSchema } from './objects/BanAttachmentUncheckedCreateInput.schema';
import { BanAttachmentUpdateInputObjectSchema as BanAttachmentUpdateInputObjectSchema } from './objects/BanAttachmentUpdateInput.schema';
import { BanAttachmentUncheckedUpdateInputObjectSchema as BanAttachmentUncheckedUpdateInputObjectSchema } from './objects/BanAttachmentUncheckedUpdateInput.schema';

export const BanAttachmentUpsertOneSchema: z.ZodType<Prisma.BanAttachmentUpsertArgs> = z.object({ select: BanAttachmentSelectObjectSchema.optional(), include: BanAttachmentIncludeObjectSchema.optional(), where: BanAttachmentWhereUniqueInputObjectSchema, create: z.union([ BanAttachmentCreateInputObjectSchema, BanAttachmentUncheckedCreateInputObjectSchema ]), update: z.union([ BanAttachmentUpdateInputObjectSchema, BanAttachmentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BanAttachmentUpsertArgs>;

export const BanAttachmentUpsertOneZodSchema = z.object({ select: BanAttachmentSelectObjectSchema.optional(), include: BanAttachmentIncludeObjectSchema.optional(), where: BanAttachmentWhereUniqueInputObjectSchema, create: z.union([ BanAttachmentCreateInputObjectSchema, BanAttachmentUncheckedCreateInputObjectSchema ]), update: z.union([ BanAttachmentUpdateInputObjectSchema, BanAttachmentUncheckedUpdateInputObjectSchema ]) }).strict();