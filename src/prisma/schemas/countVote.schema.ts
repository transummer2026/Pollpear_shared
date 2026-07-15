import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOrderByWithRelationInputObjectSchema as VoteOrderByWithRelationInputObjectSchema } from './objects/VoteOrderByWithRelationInput.schema';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';
import { VoteCountAggregateInputObjectSchema as VoteCountAggregateInputObjectSchema } from './objects/VoteCountAggregateInput.schema';

export const VoteCountSchema: z.ZodType<Prisma.VoteCountArgs> = z.object({ orderBy: z.union([VoteOrderByWithRelationInputObjectSchema, VoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteWhereInputObjectSchema.optional(), cursor: VoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VoteCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VoteCountArgs>;

export const VoteCountZodSchema = z.object({ orderBy: z.union([VoteOrderByWithRelationInputObjectSchema, VoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteWhereInputObjectSchema.optional(), cursor: VoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VoteCountAggregateInputObjectSchema ]).optional() }).strict();