import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './objects/HashtagWhereInput.schema';

export const HashtagDeleteManySchema: z.ZodType<Prisma.HashtagDeleteManyArgs> = z.object({ where: HashtagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HashtagDeleteManyArgs>;

export const HashtagDeleteManyZodSchema = z.object({ where: HashtagWhereInputObjectSchema.optional() }).strict();