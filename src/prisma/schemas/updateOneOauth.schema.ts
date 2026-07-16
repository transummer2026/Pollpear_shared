import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthSelectObjectSchema as OauthSelectObjectSchema } from './objects/OauthSelect.schema';
import { OauthIncludeObjectSchema as OauthIncludeObjectSchema } from './objects/OauthInclude.schema';
import { OauthUpdateInputObjectSchema as OauthUpdateInputObjectSchema } from './objects/OauthUpdateInput.schema';
import { OauthUncheckedUpdateInputObjectSchema as OauthUncheckedUpdateInputObjectSchema } from './objects/OauthUncheckedUpdateInput.schema';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './objects/OauthWhereUniqueInput.schema';

export const OauthUpdateOneSchema: z.ZodType<Prisma.OauthUpdateArgs> = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), data: z.union([OauthUpdateInputObjectSchema, OauthUncheckedUpdateInputObjectSchema]), where: OauthWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OauthUpdateArgs>;

export const OauthUpdateOneZodSchema = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), data: z.union([OauthUpdateInputObjectSchema, OauthUncheckedUpdateInputObjectSchema]), where: OauthWhereUniqueInputObjectSchema }).strict();