import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthSelectObjectSchema as OauthSelectObjectSchema } from './objects/OauthSelect.schema';
import { OauthIncludeObjectSchema as OauthIncludeObjectSchema } from './objects/OauthInclude.schema';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './objects/OauthWhereUniqueInput.schema';
import { OauthCreateInputObjectSchema as OauthCreateInputObjectSchema } from './objects/OauthCreateInput.schema';
import { OauthUncheckedCreateInputObjectSchema as OauthUncheckedCreateInputObjectSchema } from './objects/OauthUncheckedCreateInput.schema';
import { OauthUpdateInputObjectSchema as OauthUpdateInputObjectSchema } from './objects/OauthUpdateInput.schema';
import { OauthUncheckedUpdateInputObjectSchema as OauthUncheckedUpdateInputObjectSchema } from './objects/OauthUncheckedUpdateInput.schema';

export const OauthUpsertOneSchema: z.ZodType<Prisma.OauthUpsertArgs> = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), where: OauthWhereUniqueInputObjectSchema, create: z.union([ OauthCreateInputObjectSchema, OauthUncheckedCreateInputObjectSchema ]), update: z.union([ OauthUpdateInputObjectSchema, OauthUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.OauthUpsertArgs>;

export const OauthUpsertOneZodSchema = z.object({ select: OauthSelectObjectSchema.optional(), include: OauthIncludeObjectSchema.optional(), where: OauthWhereUniqueInputObjectSchema, create: z.union([ OauthCreateInputObjectSchema, OauthUncheckedCreateInputObjectSchema ]), update: z.union([ OauthUpdateInputObjectSchema, OauthUncheckedUpdateInputObjectSchema ]) }).strict();