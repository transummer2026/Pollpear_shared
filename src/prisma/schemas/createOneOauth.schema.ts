import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthSelectObjectSchema as OauthSelectObjectSchema } from './objects/OauthSelect.schema';
import { OauthIncludeObjectSchema as OauthIncludeObjectSchema } from './objects/OauthInclude.schema';
import { OauthCreateInputObjectSchema as OauthCreateInputObjectSchema } from './objects/OauthCreateInput.schema';
import { OauthUncheckedCreateInputObjectSchema as OauthUncheckedCreateInputObjectSchema } from './objects/OauthUncheckedCreateInput.schema';

export const OauthCreateOneSchema: z.ZodType<Prisma.OauthCreateArgs> = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), data: z.union([OauthCreateInputObjectSchema, OauthUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OauthCreateArgs>;

export const OauthCreateOneZodSchema = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), data: z.union([OauthCreateInputObjectSchema, OauthUncheckedCreateInputObjectSchema]) }).strict();