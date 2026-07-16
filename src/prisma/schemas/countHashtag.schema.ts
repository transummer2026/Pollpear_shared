import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { HashtagOrderByWithRelationInputObjectSchema as HashtagOrderByWithRelationInputObjectSchema } from './objects/HashtagOrderByWithRelationInput.schema';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './objects/HashtagWhereInput.schema';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './objects/HashtagWhereUniqueInput.schema';
import { HashtagCountAggregateInputObjectSchema as HashtagCountAggregateInputObjectSchema } from './objects/HashtagCountAggregateInput.schema';

export const HashtagCountSchema: z.ZodType<Prisma.HashtagCountArgs> = z.object({ orderBy: z.union([HashtagOrderByWithRelationInputObjectSchema, HashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: HashtagWhereInputObjectSchema.optional(), cursor: HashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HashtagCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.HashtagCountArgs>;

export const HashtagCountZodSchema = z.object({ orderBy: z.union([HashtagOrderByWithRelationInputObjectSchema, HashtagOrderByWithRelationInputObjectSchema.array()]).optional(), where: HashtagWhereInputObjectSchema.optional(), cursor: HashtagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HashtagCountAggregateInputObjectSchema ]).optional() }).strict();