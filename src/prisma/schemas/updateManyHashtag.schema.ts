import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagUpdateManyMutationInputObjectSchema as HashtagUpdateManyMutationInputObjectSchema } from './objects/HashtagUpdateManyMutationInput.schema';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './objects/HashtagWhereInput.schema';

export const HashtagUpdateManySchema: z.ZodType<Prisma.HashtagUpdateManyArgs> = z.object({ data: HashtagUpdateManyMutationInputObjectSchema, where: HashtagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.HashtagUpdateManyArgs>;

export const HashtagUpdateManyZodSchema = z.object({ data: HashtagUpdateManyMutationInputObjectSchema, where: HashtagWhereInputObjectSchema.optional() }).strict();