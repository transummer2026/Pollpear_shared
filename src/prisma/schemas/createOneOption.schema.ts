import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionSelectObjectSchema as OptionSelectObjectSchema } from './objects/OptionSelect.schema';
import { OptionIncludeObjectSchema as OptionIncludeObjectSchema } from './objects/OptionInclude.schema';
import { OptionCreateInputObjectSchema as OptionCreateInputObjectSchema } from './objects/OptionCreateInput.schema';
import { OptionUncheckedCreateInputObjectSchema as OptionUncheckedCreateInputObjectSchema } from './objects/OptionUncheckedCreateInput.schema';

export const OptionCreateOneSchema: z.ZodType<Prisma.OptionCreateArgs> = z.object({ select: OptionSelectObjectSchema.optional(), include: OptionIncludeObjectSchema.optional(), data: z.union([OptionCreateInputObjectSchema, OptionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OptionCreateArgs>;

export const OptionCreateOneZodSchema = z.object({ select: OptionSelectObjectSchema.optional(), include: OptionIncludeObjectSchema.optional(), data: z.union([OptionCreateInputObjectSchema, OptionUncheckedCreateInputObjectSchema]) }).strict();