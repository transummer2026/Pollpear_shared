import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOrderByWithRelationInputObjectSchema as VoteOrderByWithRelationInputObjectSchema } from './objects/VoteOrderByWithRelationInput.schema';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';
import { VoteCountAggregateInputObjectSchema as VoteCountAggregateInputObjectSchema } from './objects/VoteCountAggregateInput.schema';
import { VoteMinAggregateInputObjectSchema as VoteMinAggregateInputObjectSchema } from './objects/VoteMinAggregateInput.schema';
import { VoteMaxAggregateInputObjectSchema as VoteMaxAggregateInputObjectSchema } from './objects/VoteMaxAggregateInput.schema';
import { VoteAvgAggregateInputObjectSchema as VoteAvgAggregateInputObjectSchema } from './objects/VoteAvgAggregateInput.schema';
import { VoteSumAggregateInputObjectSchema as VoteSumAggregateInputObjectSchema } from './objects/VoteSumAggregateInput.schema';

export const VoteAggregateSchema: z.ZodType<Prisma.VoteAggregateArgs> = z.object({ orderBy: z.union([VoteOrderByWithRelationInputObjectSchema, VoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteWhereInputObjectSchema.optional(), cursor: VoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VoteCountAggregateInputObjectSchema ]).optional(), _min: VoteMinAggregateInputObjectSchema.optional(), _max: VoteMaxAggregateInputObjectSchema.optional(), _avg: VoteAvgAggregateInputObjectSchema.optional(), _sum: VoteSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoteAggregateArgs>;

export const VoteAggregateZodSchema = z.object({ orderBy: z.union([VoteOrderByWithRelationInputObjectSchema, VoteOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteWhereInputObjectSchema.optional(), cursor: VoteWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), VoteCountAggregateInputObjectSchema ]).optional(), _min: VoteMinAggregateInputObjectSchema.optional(), _max: VoteMaxAggregateInputObjectSchema.optional(), _avg: VoteAvgAggregateInputObjectSchema.optional(), _sum: VoteSumAggregateInputObjectSchema.optional() }).strict();