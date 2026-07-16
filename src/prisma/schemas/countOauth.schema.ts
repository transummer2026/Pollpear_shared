import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthOrderByWithRelationInputObjectSchema as OauthOrderByWithRelationInputObjectSchema } from './objects/OauthOrderByWithRelationInput.schema';
import { OauthWhereInputObjectSchema as OauthWhereInputObjectSchema } from './objects/OauthWhereInput.schema';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './objects/OauthWhereUniqueInput.schema';
import { OauthCountAggregateInputObjectSchema as OauthCountAggregateInputObjectSchema } from './objects/OauthCountAggregateInput.schema';

export const OauthCountSchema: z.ZodType<Prisma.OauthCountArgs> = z.object({ orderBy: z.union([OauthOrderByWithRelationInputObjectSchema, OauthOrderByWithRelationInputObjectSchema.array()]).optional(), where: OauthWhereInputObjectSchema.optional(), cursor: OauthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OauthCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.OauthCountArgs>;

export const OauthCountZodSchema = z.object({ orderBy: z.union([OauthOrderByWithRelationInputObjectSchema, OauthOrderByWithRelationInputObjectSchema.array()]).optional(), where: OauthWhereInputObjectSchema.optional(), cursor: OauthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OauthCountAggregateInputObjectSchema ]).optional() }).strict();