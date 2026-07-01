import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanUpdateInputObjectSchema as BanUpdateInputObjectSchema } from './objects/BanUpdateInput.schema';
import { BanUncheckedUpdateInputObjectSchema as BanUncheckedUpdateInputObjectSchema } from './objects/BanUncheckedUpdateInput.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './objects/BanWhereUniqueInput.schema';

export const BanUpdateOneSchema: z.ZodType<Prisma.BanUpdateArgs> = z.object({   data: z.union([BanUpdateInputObjectSchema, BanUncheckedUpdateInputObjectSchema]), where: BanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanUpdateArgs>;

export const BanUpdateOneZodSchema = z.object({   data: z.union([BanUpdateInputObjectSchema, BanUncheckedUpdateInputObjectSchema]), where: BanWhereUniqueInputObjectSchema }).strict();