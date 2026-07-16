import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanSelectObjectSchema as BanSelectObjectSchema } from './objects/BanSelect.schema';
import { BanIncludeObjectSchema as BanIncludeObjectSchema } from './objects/BanInclude.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './objects/BanWhereUniqueInput.schema';
import { BanCreateInputObjectSchema as BanCreateInputObjectSchema } from './objects/BanCreateInput.schema';
import { BanUncheckedCreateInputObjectSchema as BanUncheckedCreateInputObjectSchema } from './objects/BanUncheckedCreateInput.schema';
import { BanUpdateInputObjectSchema as BanUpdateInputObjectSchema } from './objects/BanUpdateInput.schema';
import { BanUncheckedUpdateInputObjectSchema as BanUncheckedUpdateInputObjectSchema } from './objects/BanUncheckedUpdateInput.schema';

export const BanUpsertOneSchema: z.ZodType<Prisma.BanUpsertArgs> = z.object({ select: BanSelectObjectSchema.optional(), include: BanIncludeObjectSchema.optional(), where: BanWhereUniqueInputObjectSchema, create: z.union([ BanCreateInputObjectSchema, BanUncheckedCreateInputObjectSchema ]), update: z.union([ BanUpdateInputObjectSchema, BanUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BanUpsertArgs>;

export const BanUpsertOneZodSchema = z.object({ select: BanSelectObjectSchema.optional(), include: BanIncludeObjectSchema.optional(), where: BanWhereUniqueInputObjectSchema, create: z.union([ BanCreateInputObjectSchema, BanUncheckedCreateInputObjectSchema ]), update: z.union([ BanUpdateInputObjectSchema, BanUncheckedUpdateInputObjectSchema ]) }).strict();