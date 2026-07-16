import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanUpdateManyMutationInputObjectSchema as BanUpdateManyMutationInputObjectSchema } from './objects/BanUpdateManyMutationInput.schema';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './objects/BanWhereInput.schema';

export const BanUpdateManySchema: z.ZodType<Prisma.BanUpdateManyArgs> = z.object({ data: BanUpdateManyMutationInputObjectSchema, where: BanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanUpdateManyArgs>;

export const BanUpdateManyZodSchema = z.object({ data: BanUpdateManyMutationInputObjectSchema, where: BanWhereInputObjectSchema.optional() }).strict();