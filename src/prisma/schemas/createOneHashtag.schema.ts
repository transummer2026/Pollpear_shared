import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagSelectObjectSchema as HashtagSelectObjectSchema } from './objects/HashtagSelect.schema';
import { HashtagIncludeObjectSchema as HashtagIncludeObjectSchema } from './objects/HashtagInclude.schema';
import { HashtagCreateInputObjectSchema as HashtagCreateInputObjectSchema } from './objects/HashtagCreateInput.schema';
import { HashtagUncheckedCreateInputObjectSchema as HashtagUncheckedCreateInputObjectSchema } from './objects/HashtagUncheckedCreateInput.schema';

export const HashtagCreateOneSchema: z.ZodType<Prisma.HashtagCreateArgs> = z.object({ select: HashtagSelectObjectSchema.optional(), include: HashtagIncludeObjectSchema.optional(), data: z.union([HashtagCreateInputObjectSchema, HashtagUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.HashtagCreateArgs>;

export const HashtagCreateOneZodSchema = z.object({ select: HashtagSelectObjectSchema.optional(), include: HashtagIncludeObjectSchema.optional(), data: z.union([HashtagCreateInputObjectSchema, HashtagUncheckedCreateInputObjectSchema]) }).strict();