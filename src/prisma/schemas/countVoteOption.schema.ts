import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionOrderByWithRelationInputObjectSchema as VoteOptionOrderByWithRelationInputObjectSchema } from './objects/VoteOptionOrderByWithRelationInput.schema';
import { VoteOptionWhereInputObjectSchema as VoteOptionWhereInputObjectSchema } from './objects/VoteOptionWhereInput.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './objects/VoteOptionWhereUniqueInput.schema';
import { VoteOptionCountAggregateInputObjectSchema as VoteOptionCountAggregateInputObjectSchema } from './objects/VoteOptionCountAggregateInput.schema';

export const VoteOptionCountSchema: z.ZodType<Prisma.VoteOptionCountArgs> = z.object({ orderBy: z.union([VoteOptionOrderByWithRelationInputObjectSchema, VoteOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteOptionWhereInputObjectSchema.optional(), cursor: VoteOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VoteOptionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.VoteOptionCountArgs>;

export const VoteOptionCountZodSchema = z.object({ orderBy: z.union([VoteOptionOrderByWithRelationInputObjectSchema, VoteOptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: VoteOptionWhereInputObjectSchema.optional(), cursor: VoteOptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), VoteOptionCountAggregateInputObjectSchema ]).optional() }).strict();