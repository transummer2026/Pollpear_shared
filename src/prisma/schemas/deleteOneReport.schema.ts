import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';

export const ReportDeleteOneSchema: z.ZodType<Prisma.ReportDeleteArgs> = z.object({   where: ReportWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportDeleteArgs>;

export const ReportDeleteOneZodSchema = z.object({   where: ReportWhereUniqueInputObjectSchema }).strict();