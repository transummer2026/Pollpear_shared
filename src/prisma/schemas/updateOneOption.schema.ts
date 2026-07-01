import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionUpdateInputObjectSchema as OptionUpdateInputObjectSchema } from './objects/OptionUpdateInput.schema';
import { OptionUncheckedUpdateInputObjectSchema as OptionUncheckedUpdateInputObjectSchema } from './objects/OptionUncheckedUpdateInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';

export const OptionUpdateOneSchema: z.ZodType<Prisma.OptionUpdateArgs> = z.object({   data: z.union([OptionUpdateInputObjectSchema, OptionUncheckedUpdateInputObjectSchema]), where: OptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OptionUpdateArgs>;

export const OptionUpdateOneZodSchema = z.object({   data: z.union([OptionUpdateInputObjectSchema, OptionUncheckedUpdateInputObjectSchema]), where: OptionWhereUniqueInputObjectSchema }).strict();