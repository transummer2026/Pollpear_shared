import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthOrderByWithRelationInputObjectSchema as OauthOrderByWithRelationInputObjectSchema } from './objects/OauthOrderByWithRelationInput.schema';
import { OauthWhereInputObjectSchema as OauthWhereInputObjectSchema } from './objects/OauthWhereInput.schema';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './objects/OauthWhereUniqueInput.schema';
import { OauthScalarFieldEnumSchema } from './enums/OauthScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OauthFindFirstSelectSchema: z.ZodType<Prisma.OauthSelect> = z.object({
    id: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerUserId: z.boolean().optional(),
    providerUrl: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    tokenType: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    grantType: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OauthSelect>;

export const OauthFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerUserId: z.boolean().optional(),
    providerUrl: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    tokenType: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    grantType: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const OauthFindFirstSchema: z.ZodType<Prisma.OauthFindFirstArgs> = z.object({ select: OauthFindFirstSelectSchema.optional(),  orderBy: z.union([OauthOrderByWithRelationInputObjectSchema, OauthOrderByWithRelationInputObjectSchema.array()]).optional(), where: OauthWhereInputObjectSchema.optional(), cursor: OauthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OauthScalarFieldEnumSchema, OauthScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OauthFindFirstArgs>;

export const OauthFindFirstZodSchema = z.object({ select: OauthFindFirstSelectSchema.optional(),  orderBy: z.union([OauthOrderByWithRelationInputObjectSchema, OauthOrderByWithRelationInputObjectSchema.array()]).optional(), where: OauthWhereInputObjectSchema.optional(), cursor: OauthWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OauthScalarFieldEnumSchema, OauthScalarFieldEnumSchema.array()]).optional() }).strict();