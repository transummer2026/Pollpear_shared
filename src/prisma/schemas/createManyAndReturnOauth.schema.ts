import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthSelectObjectSchema as OauthSelectObjectSchema } from './objects/OauthSelect.schema';
import { OauthCreateManyInputObjectSchema as OauthCreateManyInputObjectSchema } from './objects/OauthCreateManyInput.schema';

export const OauthCreateManyAndReturnSchema: z.ZodType<Prisma.OauthCreateManyAndReturnArgs> = z.object({ select: OauthSelectObjectSchema.optional(), data: z.union([ OauthCreateManyInputObjectSchema, z.array(OauthCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OauthCreateManyAndReturnArgs>;

export const OauthCreateManyAndReturnZodSchema = z.object({ select: OauthSelectObjectSchema.optional(), data: z.union([ OauthCreateManyInputObjectSchema, z.array(OauthCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();