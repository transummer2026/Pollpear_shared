import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagSelectObjectSchema as HashtagSelectObjectSchema } from './objects/HashtagSelect.schema';
import { HashtagCreateManyInputObjectSchema as HashtagCreateManyInputObjectSchema } from './objects/HashtagCreateManyInput.schema';

export const HashtagCreateManyAndReturnSchema: z.ZodType<Prisma.HashtagCreateManyAndReturnArgs> = z.object({ select: HashtagSelectObjectSchema.optional(), data: z.union([ HashtagCreateManyInputObjectSchema, z.array(HashtagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HashtagCreateManyAndReturnArgs>;

export const HashtagCreateManyAndReturnZodSchema = z.object({ select: HashtagSelectObjectSchema.optional(), data: z.union([ HashtagCreateManyInputObjectSchema, z.array(HashtagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();