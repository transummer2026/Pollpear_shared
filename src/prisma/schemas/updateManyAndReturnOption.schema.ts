import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionSelectObjectSchema as OptionSelectObjectSchema } from './objects/OptionSelect.schema';
import { OptionUpdateManyMutationInputObjectSchema as OptionUpdateManyMutationInputObjectSchema } from './objects/OptionUpdateManyMutationInput.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';

export const OptionUpdateManyAndReturnSchema: z.ZodType<Prisma.OptionUpdateManyAndReturnArgs> = z.object({ select: OptionSelectObjectSchema.optional(), data: OptionUpdateManyMutationInputObjectSchema, where: OptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OptionUpdateManyAndReturnArgs>;

export const OptionUpdateManyAndReturnZodSchema = z.object({ select: OptionSelectObjectSchema.optional(), data: OptionUpdateManyMutationInputObjectSchema, where: OptionWhereInputObjectSchema.optional() }).strict();