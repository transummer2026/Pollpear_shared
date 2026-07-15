import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './objects/PollWhereInput.schema';
import { PollOrderByWithAggregationInputObjectSchema as PollOrderByWithAggregationInputObjectSchema } from './objects/PollOrderByWithAggregationInput.schema';
import { PollScalarWhereWithAggregatesInputObjectSchema as PollScalarWhereWithAggregatesInputObjectSchema } from './objects/PollScalarWhereWithAggregatesInput.schema';
import { PollScalarFieldEnumSchema } from './enums/PollScalarFieldEnum.schema';
import { PollCountAggregateInputObjectSchema as PollCountAggregateInputObjectSchema } from './objects/PollCountAggregateInput.schema';
import { PollMinAggregateInputObjectSchema as PollMinAggregateInputObjectSchema } from './objects/PollMinAggregateInput.schema';
import { PollMaxAggregateInputObjectSchema as PollMaxAggregateInputObjectSchema } from './objects/PollMaxAggregateInput.schema';
import { PollAvgAggregateInputObjectSchema as PollAvgAggregateInputObjectSchema } from './objects/PollAvgAggregateInput.schema';
import { PollSumAggregateInputObjectSchema as PollSumAggregateInputObjectSchema } from './objects/PollSumAggregateInput.schema';

export const PollGroupBySchema: z.ZodType<Prisma.PollGroupByArgs> = z.object({ where: PollWhereInputObjectSchema.optional(), orderBy: z.union([PollOrderByWithAggregationInputObjectSchema, PollOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PollScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PollScalarFieldEnumSchema), _count: z.union([ z.literal(true), PollCountAggregateInputObjectSchema ]).optional(), _min: PollMinAggregateInputObjectSchema.optional(), _max: PollMaxAggregateInputObjectSchema.optional(), _avg: PollAvgAggregateInputObjectSchema.optional(), _sum: PollSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollGroupByArgs>;

export const PollGroupByZodSchema = z.object({ where: PollWhereInputObjectSchema.optional(), orderBy: z.union([PollOrderByWithAggregationInputObjectSchema, PollOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PollScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PollScalarFieldEnumSchema), _count: z.union([ z.literal(true), PollCountAggregateInputObjectSchema ]).optional(), _min: PollMinAggregateInputObjectSchema.optional(), _max: PollMaxAggregateInputObjectSchema.optional(), _avg: PollAvgAggregateInputObjectSchema.optional(), _sum: PollSumAggregateInputObjectSchema.optional() }).strict();