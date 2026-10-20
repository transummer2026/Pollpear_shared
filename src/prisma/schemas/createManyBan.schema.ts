import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanCreateManyInputObjectSchema as BanCreateManyInputObjectSchema } from './objects/BanCreateManyInput.schema';

export const BanCreateManySchema: z.ZodType<Prisma.BanCreateManyArgs> = z.object({ data: z.union([ BanCreateManyInputObjectSchema, z.array(BanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BanCreateManyArgs>;

export const BanCreateManyZodSchema = z.object({ data: z.union([ BanCreateManyInputObjectSchema, z.array(BanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();