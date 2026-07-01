import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';

export const OptionFindUniqueSchema: z.ZodType<Prisma.OptionFindUniqueArgs> = z.object({   where: OptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OptionFindUniqueArgs>;

export const OptionFindUniqueZodSchema = z.object({   where: OptionWhereUniqueInputObjectSchema }).strict();