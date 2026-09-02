import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanSelectObjectSchema as BanSelectObjectSchema } from './objects/BanSelect.schema';
import { BanCreateManyInputObjectSchema as BanCreateManyInputObjectSchema } from './objects/BanCreateManyInput.schema';

export const BanCreateManyAndReturnSchema: z.ZodType<Prisma.BanCreateManyAndReturnArgs> = z.object({ select: BanSelectObjectSchema.optional(), data: z.union([ BanCreateManyInputObjectSchema, z.array(BanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BanCreateManyAndReturnArgs>;

export const BanCreateManyAndReturnZodSchema = z.object({ select: BanSelectObjectSchema.optional(), data: z.union([ BanCreateManyInputObjectSchema, z.array(BanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();