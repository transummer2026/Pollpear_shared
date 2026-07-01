import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './objects/HashtagWhereUniqueInput.schema';

export const HashtagDeleteOneSchema: z.ZodType<Prisma.HashtagDeleteArgs> = z.object({   where: HashtagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HashtagDeleteArgs>;

export const HashtagDeleteOneZodSchema = z.object({   where: HashtagWhereUniqueInputObjectSchema }).strict();