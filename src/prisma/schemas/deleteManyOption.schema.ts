import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';

export const OptionDeleteManySchema: z.ZodType<Prisma.OptionDeleteManyArgs> = z.object({ where: OptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OptionDeleteManyArgs>;

export const OptionDeleteManyZodSchema = z.object({ where: OptionWhereInputObjectSchema.optional() }).strict();