import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { BanWhereUniqueInputObjectSchema as BanWhereUniqueInputObjectSchema } from './objects/BanWhereUniqueInput.schema';

export const BanFindUniqueSchema: z.ZodType<Prisma.BanFindUniqueArgs> = z.object({   where: BanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BanFindUniqueArgs>;

export const BanFindUniqueZodSchema = z.object({   where: BanWhereUniqueInputObjectSchema }).strict();