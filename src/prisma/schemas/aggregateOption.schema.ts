import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionOrderByWithRelationInputObjectSchema as OptionOrderByWithRelationInputObjectSchema } from './objects/OptionOrderByWithRelationInput.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';
import { OptionCountAggregateInputObjectSchema as OptionCountAggregateInputObjectSchema } from './objects/OptionCountAggregateInput.schema';
import { OptionMinAggregateInputObjectSchema as OptionMinAggregateInputObjectSchema } from './objects/OptionMinAggregateInput.schema';
import { OptionMaxAggregateInputObjectSchema as OptionMaxAggregateInputObjectSchema } from './objects/OptionMaxAggregateInput.schema';
import { OptionAvgAggregateInputObjectSchema as OptionAvgAggregateInputObjectSchema } from './objects/OptionAvgAggregateInput.schema';
import { OptionSumAggregateInputObjectSchema as OptionSumAggregateInputObjectSchema } from './objects/OptionSumAggregateInput.schema';

export const OptionAggregateSchema: z.ZodType<Prisma.OptionAggregateArgs> = z.object({ orderBy: z.union([OptionOrderByWithRelationInputObjectSchema, OptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: OptionWhereInputObjectSchema.optional(), cursor: OptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), OptionCountAggregateInputObjectSchema ]).optional(), _min: OptionMinAggregateInputObjectSchema.optional(), _max: OptionMaxAggregateInputObjectSchema.optional(), _avg: OptionAvgAggregateInputObjectSchema.optional(), _sum: OptionSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OptionAggregateArgs>;

export const OptionAggregateZodSchema = z.object({ orderBy: z.union([OptionOrderByWithRelationInputObjectSchema, OptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: OptionWhereInputObjectSchema.optional(), cursor: OptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), OptionCountAggregateInputObjectSchema ]).optional(), _min: OptionMinAggregateInputObjectSchema.optional(), _max: OptionMaxAggregateInputObjectSchema.optional(), _avg: OptionAvgAggregateInputObjectSchema.optional(), _sum: OptionSumAggregateInputObjectSchema.optional() }).strict();