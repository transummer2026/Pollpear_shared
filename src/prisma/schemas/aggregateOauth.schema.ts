import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthOrderByWithRelationInputObjectSchema as OauthOrderByWithRelationInputObjectSchema } from './objects/OauthOrderByWithRelationInput.schema';
import { OauthWhereInputObjectSchema as OauthWhereInputObjectSchema } from './objects/OauthWhereInput.schema';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './objects/OauthWhereUniqueInput.schema';
import { OauthCountAggregateInputObjectSchema as OauthCountAggregateInputObjectSchema } from './objects/OauthCountAggregateInput.schema';
import { OauthMinAggregateInputObjectSchema as OauthMinAggregateInputObjectSchema } from './objects/OauthMinAggregateInput.schema';
import { OauthMaxAggregateInputObjectSchema as OauthMaxAggregateInputObjectSchema } from './objects/OauthMaxAggregateInput.schema';
import { OauthAvgAggregateInputObjectSchema as OauthAvgAggregateInputObjectSchema } from './objects/OauthAvgAggregateInput.schema';
import { OauthSumAggregateInputObjectSchema as OauthSumAggregateInputObjectSchema } from './objects/OauthSumAggregateInput.schema';

export const OauthAggregateSchema: z.ZodType<Prisma.OauthAggregateArgs> = z.object({ orderBy: z.union([OauthOrderByWithRelationInputObjectSchema, OauthOrderByWithRelationInputObjectSchema.array()]).optional(), where: OauthWhereInputObjectSchema.optional(), cursor: OauthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), OauthCountAggregateInputObjectSchema ]).optional(), _min: OauthMinAggregateInputObjectSchema.optional(), _max: OauthMaxAggregateInputObjectSchema.optional(), _avg: OauthAvgAggregateInputObjectSchema.optional(), _sum: OauthSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OauthAggregateArgs>;

export const OauthAggregateZodSchema = z.object({ orderBy: z.union([OauthOrderByWithRelationInputObjectSchema, OauthOrderByWithRelationInputObjectSchema.array()]).optional(), where: OauthWhereInputObjectSchema.optional(), cursor: OauthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), OauthCountAggregateInputObjectSchema ]).optional(), _min: OauthMinAggregateInputObjectSchema.optional(), _max: OauthMaxAggregateInputObjectSchema.optional(), _avg: OauthAvgAggregateInputObjectSchema.optional(), _sum: OauthSumAggregateInputObjectSchema.optional() }).strict();