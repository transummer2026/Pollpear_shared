import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanSelectObjectSchema as BanSelectObjectSchema } from './objects/BanSelect.schema';
import { BanIncludeObjectSchema as BanIncludeObjectSchema } from './objects/BanInclude.schema';
import { BanCreateInputObjectSchema as BanCreateInputObjectSchema } from './objects/BanCreateInput.schema';
import { BanUncheckedCreateInputObjectSchema as BanUncheckedCreateInputObjectSchema } from './objects/BanUncheckedCreateInput.schema';

export const BanCreateOneSchema: z.ZodType<Prisma.BanCreateArgs> = z.object({ select: BanSelectObjectSchema.optional(), include: BanIncludeObjectSchema.optional(), data: z.union([BanCreateInputObjectSchema, BanUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BanCreateArgs>;

export const BanCreateOneZodSchema = z.object({ select: BanSelectObjectSchema.optional(), include: BanIncludeObjectSchema.optional(), data: z.union([BanCreateInputObjectSchema, BanUncheckedCreateInputObjectSchema]) }).strict();