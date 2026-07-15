import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthSelectObjectSchema as OauthSelectObjectSchema } from './objects/OauthSelect.schema';
import { OauthUpdateManyMutationInputObjectSchema as OauthUpdateManyMutationInputObjectSchema } from './objects/OauthUpdateManyMutationInput.schema';
import { OauthWhereInputObjectSchema as OauthWhereInputObjectSchema } from './objects/OauthWhereInput.schema';

export const OauthUpdateManyAndReturnSchema: z.ZodType<Prisma.OauthUpdateManyAndReturnArgs> = z.object({ select: OauthSelectObjectSchema.optional(), data: OauthUpdateManyMutationInputObjectSchema, where: OauthWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OauthUpdateManyAndReturnArgs>;

export const OauthUpdateManyAndReturnZodSchema = z.object({ select: OauthSelectObjectSchema.optional(), data: OauthUpdateManyMutationInputObjectSchema, where: OauthWhereInputObjectSchema.optional() }).strict();