import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagUncheckedCreateInputObjectSchema as HashtagUncheckedCreateInputObjectSchema } from './objects/HashtagUncheckedCreateInput.schema';

export const HashtagCreateOneSchema: z.ZodType<Prisma.HashtagCreateArgs> = z.object({   data: HashtagUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HashtagCreateArgs>;

export const HashtagCreateOneZodSchema = z.object({   data: HashtagUncheckedCreateInputObjectSchema }).strict();