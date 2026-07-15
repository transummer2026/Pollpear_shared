import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionSelectObjectSchema as OptionSelectObjectSchema } from './objects/OptionSelect.schema';
import { OptionIncludeObjectSchema as OptionIncludeObjectSchema } from './objects/OptionInclude.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';
import { OptionCreateInputObjectSchema as OptionCreateInputObjectSchema } from './objects/OptionCreateInput.schema';
import { OptionUncheckedCreateInputObjectSchema as OptionUncheckedCreateInputObjectSchema } from './objects/OptionUncheckedCreateInput.schema';
import { OptionUpdateInputObjectSchema as OptionUpdateInputObjectSchema } from './objects/OptionUpdateInput.schema';
import { OptionUncheckedUpdateInputObjectSchema as OptionUncheckedUpdateInputObjectSchema } from './objects/OptionUncheckedUpdateInput.schema';

export const OptionUpsertOneSchema: z.ZodType<Prisma.OptionUpsertArgs> = z.object({ select: OptionSelectObjectSchema.optional(), include: OptionIncludeObjectSchema.optional(), where: OptionWhereUniqueInputObjectSchema, create: z.union([ OptionCreateInputObjectSchema, OptionUncheckedCreateInputObjectSchema ]), update: z.union([ OptionUpdateInputObjectSchema, OptionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.OptionUpsertArgs>;

export const OptionUpsertOneZodSchema = z.object({ select: OptionSelectObjectSchema.optional(), include: OptionIncludeObjectSchema.optional(), where: OptionWhereUniqueInputObjectSchema, create: z.union([ OptionCreateInputObjectSchema, OptionUncheckedCreateInputObjectSchema ]), update: z.union([ OptionUpdateInputObjectSchema, OptionUncheckedUpdateInputObjectSchema ]) }).strict();