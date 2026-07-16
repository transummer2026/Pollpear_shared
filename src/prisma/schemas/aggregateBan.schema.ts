import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanOrderByWithRelationInputObjectSchema as BanOrderByWithRelationInputObjectSchema } from './objects/BanOrderByWithRelationInput.schema';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './objects/BanWhereInput.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './objects/BanWhereUniqueInput.schema';
import { BanCountAggregateInputObjectSchema as BanCountAggregateInputObjectSchema } from './objects/BanCountAggregateInput.schema';
import { BanMinAggregateInputObjectSchema as BanMinAggregateInputObjectSchema } from './objects/BanMinAggregateInput.schema';
import { BanMaxAggregateInputObjectSchema as BanMaxAggregateInputObjectSchema } from './objects/BanMaxAggregateInput.schema';
import { BanAvgAggregateInputObjectSchema as BanAvgAggregateInputObjectSchema } from './objects/BanAvgAggregateInput.schema';
import { BanSumAggregateInputObjectSchema as BanSumAggregateInputObjectSchema } from './objects/BanSumAggregateInput.schema';

export const BanAggregateSchema: z.ZodType<Prisma.BanAggregateArgs> = z.object({ orderBy: z.union([BanOrderByWithRelationInputObjectSchema, BanOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanWhereInputObjectSchema.optional(), cursor: BanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BanCountAggregateInputObjectSchema ]).optional(), _min: BanMinAggregateInputObjectSchema.optional(), _max: BanMaxAggregateInputObjectSchema.optional(), _avg: BanAvgAggregateInputObjectSchema.optional(), _sum: BanSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanAggregateArgs>;

export const BanAggregateZodSchema = z.object({ orderBy: z.union([BanOrderByWithRelationInputObjectSchema, BanOrderByWithRelationInputObjectSchema.array()]).optional(), where: BanWhereInputObjectSchema.optional(), cursor: BanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BanCountAggregateInputObjectSchema ]).optional(), _min: BanMinAggregateInputObjectSchema.optional(), _max: BanMaxAggregateInputObjectSchema.optional(), _avg: BanAvgAggregateInputObjectSchema.optional(), _sum: BanSumAggregateInputObjectSchema.optional() }).strict();