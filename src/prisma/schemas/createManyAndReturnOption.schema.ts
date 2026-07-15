import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionSelectObjectSchema as OptionSelectObjectSchema } from './objects/OptionSelect.schema';
import { OptionCreateManyInputObjectSchema as OptionCreateManyInputObjectSchema } from './objects/OptionCreateManyInput.schema';

export const OptionCreateManyAndReturnSchema: z.ZodType<Prisma.OptionCreateManyAndReturnArgs> = z.object({ select: OptionSelectObjectSchema.optional(), data: z.union([ OptionCreateManyInputObjectSchema, z.array(OptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OptionCreateManyAndReturnArgs>;

export const OptionCreateManyAndReturnZodSchema = z.object({ select: OptionSelectObjectSchema.optional(), data: z.union([ OptionCreateManyInputObjectSchema, z.array(OptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();