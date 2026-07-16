import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthWhereInputObjectSchema as OauthWhereInputObjectSchema } from './objects/OauthWhereInput.schema';
import { OauthOrderByWithAggregationInputObjectSchema as OauthOrderByWithAggregationInputObjectSchema } from './objects/OauthOrderByWithAggregationInput.schema';
import { OauthScalarWhereWithAggregatesInputObjectSchema as OauthScalarWhereWithAggregatesInputObjectSchema } from './objects/OauthScalarWhereWithAggregatesInput.schema';
import { OauthScalarFieldEnumSchema } from './enums/OauthScalarFieldEnum.schema';
import { OauthCountAggregateInputObjectSchema as OauthCountAggregateInputObjectSchema } from './objects/OauthCountAggregateInput.schema';
import { OauthMinAggregateInputObjectSchema as OauthMinAggregateInputObjectSchema } from './objects/OauthMinAggregateInput.schema';
import { OauthMaxAggregateInputObjectSchema as OauthMaxAggregateInputObjectSchema } from './objects/OauthMaxAggregateInput.schema';
import { OauthAvgAggregateInputObjectSchema as OauthAvgAggregateInputObjectSchema } from './objects/OauthAvgAggregateInput.schema';
import { OauthSumAggregateInputObjectSchema as OauthSumAggregateInputObjectSchema } from './objects/OauthSumAggregateInput.schema';

export const OauthGroupBySchema: z.ZodType<Prisma.OauthGroupByArgs> = z.object({ where: OauthWhereInputObjectSchema.optional(), orderBy: z.union([OauthOrderByWithAggregationInputObjectSchema, OauthOrderByWithAggregationInputObjectSchema.array()]).optional(), having: OauthScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(OauthScalarFieldEnumSchema), _count: z.union([ z.literal(true), OauthCountAggregateInputObjectSchema ]).optional(), _min: OauthMinAggregateInputObjectSchema.optional(), _max: OauthMaxAggregateInputObjectSchema.optional(), _avg: OauthAvgAggregateInputObjectSchema.optional(), _sum: OauthSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OauthGroupByArgs>;

export const OauthGroupByZodSchema = z.object({ where: OauthWhereInputObjectSchema.optional(), orderBy: z.union([OauthOrderByWithAggregationInputObjectSchema, OauthOrderByWithAggregationInputObjectSchema.array()]).optional(), having: OauthScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(OauthScalarFieldEnumSchema), _count: z.union([ z.literal(true), OauthCountAggregateInputObjectSchema ]).optional(), _min: OauthMinAggregateInputObjectSchema.optional(), _max: OauthMaxAggregateInputObjectSchema.optional(), _avg: OauthAvgAggregateInputObjectSchema.optional(), _sum: OauthSumAggregateInputObjectSchema.optional() }).strict();