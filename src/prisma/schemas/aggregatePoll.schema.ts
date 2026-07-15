import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from './objects/PollOrderByWithRelationInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './objects/PollWhereInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './objects/PollWhereUniqueInput.schema';
import { PollCountAggregateInputObjectSchema as PollCountAggregateInputObjectSchema } from './objects/PollCountAggregateInput.schema';
import { PollMinAggregateInputObjectSchema as PollMinAggregateInputObjectSchema } from './objects/PollMinAggregateInput.schema';
import { PollMaxAggregateInputObjectSchema as PollMaxAggregateInputObjectSchema } from './objects/PollMaxAggregateInput.schema';
import { PollAvgAggregateInputObjectSchema as PollAvgAggregateInputObjectSchema } from './objects/PollAvgAggregateInput.schema';
import { PollSumAggregateInputObjectSchema as PollSumAggregateInputObjectSchema } from './objects/PollSumAggregateInput.schema';

export const PollAggregateSchema: z.ZodType<Prisma.PollAggregateArgs> = z.object({ orderBy: z.union([PollOrderByWithRelationInputObjectSchema, PollOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollWhereInputObjectSchema.optional(), cursor: PollWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PollCountAggregateInputObjectSchema ]).optional(), _min: PollMinAggregateInputObjectSchema.optional(), _max: PollMaxAggregateInputObjectSchema.optional(), _avg: PollAvgAggregateInputObjectSchema.optional(), _sum: PollSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollAggregateArgs>;

export const PollAggregateZodSchema = z.object({ orderBy: z.union([PollOrderByWithRelationInputObjectSchema, PollOrderByWithRelationInputObjectSchema.array()]).optional(), where: PollWhereInputObjectSchema.optional(), cursor: PollWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PollCountAggregateInputObjectSchema ]).optional(), _min: PollMinAggregateInputObjectSchema.optional(), _max: PollMaxAggregateInputObjectSchema.optional(), _avg: PollAvgAggregateInputObjectSchema.optional(), _sum: PollSumAggregateInputObjectSchema.optional() }).strict();