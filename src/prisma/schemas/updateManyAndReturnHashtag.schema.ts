import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagSelectObjectSchema as HashtagSelectObjectSchema } from './objects/HashtagSelect.schema';
import { HashtagUpdateManyMutationInputObjectSchema as HashtagUpdateManyMutationInputObjectSchema } from './objects/HashtagUpdateManyMutationInput.schema';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './objects/HashtagWhereInput.schema';

export const HashtagUpdateManyAndReturnSchema: z.ZodType<Prisma.HashtagUpdateManyAndReturnArgs> = z.object({ select: HashtagSelectObjectSchema.optional(), data: HashtagUpdateManyMutationInputObjectSchema, where: HashtagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HashtagUpdateManyAndReturnArgs>;

export const HashtagUpdateManyAndReturnZodSchema = z.object({ select: HashtagSelectObjectSchema.optional(), data: HashtagUpdateManyMutationInputObjectSchema, where: HashtagWhereInputObjectSchema.optional() }).strict();