import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthCreateManyInputObjectSchema as OauthCreateManyInputObjectSchema } from './objects/OauthCreateManyInput.schema';

export const OauthCreateManySchema: z.ZodType<Prisma.OauthCreateManyArgs> = z.object({ data: z.union([ OauthCreateManyInputObjectSchema, z.array(OauthCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OauthCreateManyArgs>;

export const OauthCreateManyZodSchema = z.object({ data: z.union([ OauthCreateManyInputObjectSchema, z.array(OauthCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();