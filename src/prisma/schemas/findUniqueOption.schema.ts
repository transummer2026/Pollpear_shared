import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionSelectObjectSchema as OptionSelectObjectSchema } from './objects/OptionSelect.schema';
import { OptionIncludeObjectSchema as OptionIncludeObjectSchema } from './objects/OptionInclude.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';

export const OptionFindUniqueSchema: z.ZodType<Prisma.OptionFindUniqueArgs> = z.object({ select: OptionSelectObjectSchema.optional(), include: OptionIncludeObjectSchema.optional(), where: OptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OptionFindUniqueArgs>;

export const OptionFindUniqueZodSchema = z.object({ select: OptionSelectObjectSchema.optional(), include: OptionIncludeObjectSchema.optional(), where: OptionWhereUniqueInputObjectSchema }).strict();