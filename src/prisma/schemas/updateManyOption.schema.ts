import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionUpdateManyMutationInputObjectSchema as OptionUpdateManyMutationInputObjectSchema } from './objects/OptionUpdateManyMutationInput.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';

export const OptionUpdateManySchema: z.ZodType<Prisma.OptionUpdateManyArgs> = z.object({ data: OptionUpdateManyMutationInputObjectSchema, where: OptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OptionUpdateManyArgs>;

export const OptionUpdateManyZodSchema = z.object({ data: OptionUpdateManyMutationInputObjectSchema, where: OptionWhereInputObjectSchema.optional() }).strict();