import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BlockSelectObjectSchema as BlockSelectObjectSchema } from './objects/BlockSelect.schema';
import { BlockCreateManyInputObjectSchema as BlockCreateManyInputObjectSchema } from './objects/BlockCreateManyInput.schema';

export const BlockCreateManyAndReturnSchema: z.ZodType<Prisma.BlockCreateManyAndReturnArgs> = z.object({ select: BlockSelectObjectSchema.optional(), data: z.union([ BlockCreateManyInputObjectSchema, z.array(BlockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BlockCreateManyAndReturnArgs>;

export const BlockCreateManyAndReturnZodSchema = z.object({ select: BlockSelectObjectSchema.optional(), data: z.union([ BlockCreateManyInputObjectSchema, z.array(BlockCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();