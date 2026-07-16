import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagCreateManyInputObjectSchema as HashtagCreateManyInputObjectSchema } from './objects/HashtagCreateManyInput.schema';

export const HashtagCreateManySchema: z.ZodType<Prisma.HashtagCreateManyArgs> = z.object({ data: z.union([ HashtagCreateManyInputObjectSchema, z.array(HashtagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.HashtagCreateManyArgs>;

export const HashtagCreateManyZodSchema = z.object({ data: z.union([ HashtagCreateManyInputObjectSchema, z.array(HashtagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();