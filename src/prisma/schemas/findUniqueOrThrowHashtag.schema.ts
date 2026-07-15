import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagSelectObjectSchema as HashtagSelectObjectSchema } from './objects/HashtagSelect.schema';
import { HashtagIncludeObjectSchema as HashtagIncludeObjectSchema } from './objects/HashtagInclude.schema';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './objects/HashtagWhereUniqueInput.schema';

export const HashtagFindUniqueOrThrowSchema: z.ZodType<Prisma.HashtagFindUniqueOrThrowArgs> = z.object({ select: HashtagSelectObjectSchema.optional(), include: HashtagIncludeObjectSchema.optional(), where: HashtagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.HashtagFindUniqueOrThrowArgs>;

export const HashtagFindUniqueOrThrowZodSchema = z.object({ select: HashtagSelectObjectSchema.optional(), include: HashtagIncludeObjectSchema.optional(), where: HashtagWhereUniqueInputObjectSchema }).strict();