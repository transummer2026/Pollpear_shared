import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanSelectObjectSchema as BanSelectObjectSchema } from './objects/BanSelect.schema';
import { BanIncludeObjectSchema as BanIncludeObjectSchema } from './objects/BanInclude.schema';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './objects/BanWhereUniqueInput.schema';

export const BanFindUniqueSchema: z.ZodType<Prisma.BanFindUniqueArgs> = z.object({ select: BanSelectObjectSchema.optional(), include: BanIncludeObjectSchema.optional(), where: BanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanFindUniqueArgs>;

export const BanFindUniqueZodSchema = z.object({ select: BanSelectObjectSchema.optional(), include: BanIncludeObjectSchema.optional(), where: BanWhereUniqueInputObjectSchema }).strict();