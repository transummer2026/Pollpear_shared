import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentSelectObjectSchema as BanAttachmentSelectObjectSchema } from './objects/BanAttachmentSelect.schema';
import { BanAttachmentCreateManyInputObjectSchema as BanAttachmentCreateManyInputObjectSchema } from './objects/BanAttachmentCreateManyInput.schema';

export const BanAttachmentCreateManyAndReturnSchema: z.ZodType<Prisma.BanAttachmentCreateManyAndReturnArgs> = z.object({ select: BanAttachmentSelectObjectSchema.optional(), data: z.union([ BanAttachmentCreateManyInputObjectSchema, z.array(BanAttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BanAttachmentCreateManyAndReturnArgs>;

export const BanAttachmentCreateManyAndReturnZodSchema = z.object({ select: BanAttachmentSelectObjectSchema.optional(), data: z.union([ BanAttachmentCreateManyInputObjectSchema, z.array(BanAttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();