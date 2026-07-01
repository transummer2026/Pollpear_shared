import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './objects/BanWhereUniqueInput.schema';

export const BanDeleteOneSchema: z.ZodType<Prisma.BanDeleteArgs> = z.object({   where: BanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanDeleteArgs>;

export const BanDeleteOneZodSchema = z.object({   where: BanWhereUniqueInputObjectSchema }).strict();