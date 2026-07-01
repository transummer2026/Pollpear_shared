import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';

export const ApiKeyDeleteOneSchema: z.ZodType<Prisma.ApiKeyDeleteArgs> = z.object({   where: ApiKeyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ApiKeyDeleteArgs>;

export const ApiKeyDeleteOneZodSchema = z.object({   where: ApiKeyWhereUniqueInputObjectSchema }).strict();