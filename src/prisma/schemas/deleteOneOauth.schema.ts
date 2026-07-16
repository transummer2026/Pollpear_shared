import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthSelectObjectSchema as OauthSelectObjectSchema } from './objects/OauthSelect.schema';
import { OauthIncludeObjectSchema as OauthIncludeObjectSchema } from './objects/OauthInclude.schema';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './objects/OauthWhereUniqueInput.schema';

export const OauthDeleteOneSchema: z.ZodType<Prisma.OauthDeleteArgs> = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), where: OauthWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OauthDeleteArgs>;

export const OauthDeleteOneZodSchema = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), where: OauthWhereUniqueInputObjectSchema }).strict();