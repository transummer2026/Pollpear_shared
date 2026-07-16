import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './objects/BanWhereInput.schema';
import { BanOrderByWithAggregationInputObjectSchema as BanOrderByWithAggregationInputObjectSchema } from './objects/BanOrderByWithAggregationInput.schema';
import { BanScalarWhereWithAggregatesInputObjectSchema as BanScalarWhereWithAggregatesInputObjectSchema } from './objects/BanScalarWhereWithAggregatesInput.schema';
import { BanScalarFieldEnumSchema } from './enums/BanScalarFieldEnum.schema';
import { BanCountAggregateInputObjectSchema as BanCountAggregateInputObjectSchema } from './objects/BanCountAggregateInput.schema';
import { BanMinAggregateInputObjectSchema as BanMinAggregateInputObjectSchema } from './objects/BanMinAggregateInput.schema';
import { BanMaxAggregateInputObjectSchema as BanMaxAggregateInputObjectSchema } from './objects/BanMaxAggregateInput.schema';
import { BanAvgAggregateInputObjectSchema as BanAvgAggregateInputObjectSchema } from './objects/BanAvgAggregateInput.schema';
import { BanSumAggregateInputObjectSchema as BanSumAggregateInputObjectSchema } from './objects/BanSumAggregateInput.schema';

export const BanGroupBySchema: z.ZodType<Prisma.BanGroupByArgs> = z.object({ where: BanWhereInputObjectSchema.optional(), orderBy: z.union([BanOrderByWithAggregationInputObjectSchema, BanOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BanScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BanScalarFieldEnumSchema), _count: z.union([ z.literal(true), BanCountAggregateInputObjectSchema ]).optional(), _min: BanMinAggregateInputObjectSchema.optional(), _max: BanMaxAggregateInputObjectSchema.optional(), _avg: BanAvgAggregateInputObjectSchema.optional(), _sum: BanSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanGroupByArgs>;

export const BanGroupByZodSchema = z.object({ where: BanWhereInputObjectSchema.optional(), orderBy: z.union([BanOrderByWithAggregationInputObjectSchema, BanOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BanScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BanScalarFieldEnumSchema), _count: z.union([ z.literal(true), BanCountAggregateInputObjectSchema ]).optional(), _min: BanMinAggregateInputObjectSchema.optional(), _max: BanMaxAggregateInputObjectSchema.optional(), _avg: BanAvgAggregateInputObjectSchema.optional(), _sum: BanSumAggregateInputObjectSchema.optional() }).strict();