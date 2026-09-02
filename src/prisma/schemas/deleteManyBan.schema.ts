import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './objects/BanWhereInput.schema';

export const BanDeleteManySchema: z.ZodType<Prisma.BanDeleteManyArgs> = z.object({ where: BanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanDeleteManyArgs>;

export const BanDeleteManyZodSchema = z.object({ where: BanWhereInputObjectSchema.optional() }).strict();