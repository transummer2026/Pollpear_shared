import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';
import { VoteOrderByWithAggregationInputObjectSchema as VoteOrderByWithAggregationInputObjectSchema } from './objects/VoteOrderByWithAggregationInput.schema';
import { VoteScalarWhereWithAggregatesInputObjectSchema as VoteScalarWhereWithAggregatesInputObjectSchema } from './objects/VoteScalarWhereWithAggregatesInput.schema';
import { VoteScalarFieldEnumSchema } from './enums/VoteScalarFieldEnum.schema';
import { VoteCountAggregateInputObjectSchema as VoteCountAggregateInputObjectSchema } from './objects/VoteCountAggregateInput.schema';
import { VoteMinAggregateInputObjectSchema as VoteMinAggregateInputObjectSchema } from './objects/VoteMinAggregateInput.schema';
import { VoteMaxAggregateInputObjectSchema as VoteMaxAggregateInputObjectSchema } from './objects/VoteMaxAggregateInput.schema';
import { VoteAvgAggregateInputObjectSchema as VoteAvgAggregateInputObjectSchema } from './objects/VoteAvgAggregateInput.schema';
import { VoteSumAggregateInputObjectSchema as VoteSumAggregateInputObjectSchema } from './objects/VoteSumAggregateInput.schema';

export const VoteGroupBySchema: z.ZodType<Prisma.VoteGroupByArgs> = z.object({ where: VoteWhereInputObjectSchema.optional(), orderBy: z.union([VoteOrderByWithAggregationInputObjectSchema, VoteOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VoteScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VoteScalarFieldEnumSchema), _count: z.union([ z.literal(true), VoteCountAggregateInputObjectSchema ]).optional(), _min: VoteMinAggregateInputObjectSchema.optional(), _max: VoteMaxAggregateInputObjectSchema.optional(), _avg: VoteAvgAggregateInputObjectSchema.optional(), _sum: VoteSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoteGroupByArgs>;

export const VoteGroupByZodSchema = z.object({ where: VoteWhereInputObjectSchema.optional(), orderBy: z.union([VoteOrderByWithAggregationInputObjectSchema, VoteOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VoteScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VoteScalarFieldEnumSchema), _count: z.union([ z.literal(true), VoteCountAggregateInputObjectSchema ]).optional(), _min: VoteMinAggregateInputObjectSchema.optional(), _max: VoteMaxAggregateInputObjectSchema.optional(), _avg: VoteAvgAggregateInputObjectSchema.optional(), _sum: VoteSumAggregateInputObjectSchema.optional() }).strict();