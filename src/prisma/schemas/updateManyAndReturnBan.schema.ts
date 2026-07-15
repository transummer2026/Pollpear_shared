import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanSelectObjectSchema as BanSelectObjectSchema } from './objects/BanSelect.schema';
import { BanUpdateManyMutationInputObjectSchema as BanUpdateManyMutationInputObjectSchema } from './objects/BanUpdateManyMutationInput.schema';
import { BanWhereInputObjectSchema as BanWhereInputObjectSchema } from './objects/BanWhereInput.schema';

export const BanUpdateManyAndReturnSchema: z.ZodType<Prisma.BanUpdateManyAndReturnArgs> = z.object({ select: BanSelectObjectSchema.optional(), data: BanUpdateManyMutationInputObjectSchema, where: BanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BanUpdateManyAndReturnArgs>;

export const BanUpdateManyAndReturnZodSchema = z.object({ select: BanSelectObjectSchema.optional(), data: BanUpdateManyMutationInputObjectSchema, where: BanWhereInputObjectSchema.optional() }).strict();