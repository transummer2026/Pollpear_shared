import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthWhereInputObjectSchema as OauthWhereInputObjectSchema } from './objects/OauthWhereInput.schema';

export const OauthDeleteManySchema: z.ZodType<Prisma.OauthDeleteManyArgs> = z.object({ where: OauthWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OauthDeleteManyArgs>;

export const OauthDeleteManyZodSchema = z.object({ where: OauthWhereInputObjectSchema.optional() }).strict();