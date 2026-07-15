import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthSelectObjectSchema as OauthSelectObjectSchema } from './objects/OauthSelect.schema';
import { OauthIncludeObjectSchema as OauthIncludeObjectSchema } from './objects/OauthInclude.schema';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './objects/OauthWhereUniqueInput.schema';

export const OauthFindUniqueSchema: z.ZodType<Prisma.OauthFindUniqueArgs> = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), where: OauthWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OauthFindUniqueArgs>;

export const OauthFindUniqueZodSchema = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), where: OauthWhereUniqueInputObjectSchema }).strict();