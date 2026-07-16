import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanAttachmentCreateManyInputObjectSchema as BanAttachmentCreateManyInputObjectSchema } from './objects/BanAttachmentCreateManyInput.schema';

export const BanAttachmentCreateManySchema: z.ZodType<Prisma.BanAttachmentCreateManyArgs> = z.object({ data: z.union([ BanAttachmentCreateManyInputObjectSchema, z.array(BanAttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BanAttachmentCreateManyArgs>;

export const BanAttachmentCreateManyZodSchema = z.object({ data: z.union([ BanAttachmentCreateManyInputObjectSchema, z.array(BanAttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();