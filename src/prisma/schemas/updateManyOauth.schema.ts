import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthUpdateManyMutationInputObjectSchema as OauthUpdateManyMutationInputObjectSchema } from './objects/OauthUpdateManyMutationInput.schema';
import { OauthWhereInputObjectSchema as OauthWhereInputObjectSchema } from './objects/OauthWhereInput.schema';

export const OauthUpdateManySchema: z.ZodType<Prisma.OauthUpdateManyArgs> = z.object({ data: OauthUpdateManyMutationInputObjectSchema, where: OauthWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OauthUpdateManyArgs>;

export const OauthUpdateManyZodSchema = z.object({ data: OauthUpdateManyMutationInputObjectSchema, where: OauthWhereInputObjectSchema.optional() }).strict();