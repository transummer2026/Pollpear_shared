import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from './objects/OauthWhereUniqueInput.schema';

export const OauthFindUniqueSchema: z.ZodType<Prisma.OauthFindUniqueArgs> = z.object({   where: OauthWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OauthFindUniqueArgs>;

export const OauthFindUniqueZodSchema = z.object({   where: OauthWhereUniqueInputObjectSchema }).strict();