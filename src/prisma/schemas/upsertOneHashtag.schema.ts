import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagSelectObjectSchema as HashtagSelectObjectSchema } from './objects/HashtagSelect.schema';
import { HashtagIncludeObjectSchema as HashtagIncludeObjectSchema } from './objects/HashtagInclude.schema';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './objects/HashtagWhereUniqueInput.schema';
import { HashtagCreateInputObjectSchema as HashtagCreateInputObjectSchema } from './objects/HashtagCreateInput.schema';
import { HashtagUncheckedCreateInputObjectSchema as HashtagUncheckedCreateInputObjectSchema } from './objects/HashtagUncheckedCreateInput.schema';
import { HashtagUpdateInputObjectSchema as HashtagUpdateInputObjectSchema } from './objects/HashtagUpdateInput.schema';
import { HashtagUncheckedUpdateInputObjectSchema as HashtagUncheckedUpdateInputObjectSchema } from './objects/HashtagUncheckedUpdateInput.schema';

export const HashtagUpsertOneSchema: z.ZodType<Prisma.HashtagUpsertArgs> = z.object({ select: HashtagSelectObjectSchema.optional(), include: HashtagIncludeObjectSchema.optional(), where: HashtagWhereUniqueInputObjectSchema, create: z.union([ HashtagCreateInputObjectSchema, HashtagUncheckedCreateInputObjectSchema ]), update: z.union([ HashtagUpdateInputObjectSchema, HashtagUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.HashtagUpsertArgs>;

export const HashtagUpsertOneZodSchema = z.object({ select: HashtagSelectObjectSchema.optional(), include: HashtagIncludeObjectSchema.optional(), where: HashtagWhereUniqueInputObjectSchema, create: z.union([ HashtagCreateInputObjectSchema, HashtagUncheckedCreateInputObjectSchema ]), update: z.union([ HashtagUpdateInputObjectSchema, HashtagUncheckedUpdateInputObjectSchema ]) }).strict();