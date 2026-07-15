import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockCreateManyInputObjectSchema as BlockCreateManyInputObjectSchema } from './objects/BlockCreateManyInput.schema';

export const BlockCreateManySchema: z.ZodType<Prisma.BlockCreateManyArgs> = z.object({ data: z.union([ BlockCreateManyInputObjectSchema, z.array(BlockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BlockCreateManyArgs>;

export const BlockCreateManyZodSchema = z.object({ data: z.union([ BlockCreateManyInputObjectSchema, z.array(BlockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();