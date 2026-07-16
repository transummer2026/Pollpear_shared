import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { OptionCreateManyInputObjectSchema as OptionCreateManyInputObjectSchema } from './objects/OptionCreateManyInput.schema';

export const OptionCreateManySchema: z.ZodType<Prisma.OptionCreateManyArgs> = z.object({ data: z.union([ OptionCreateManyInputObjectSchema, z.array(OptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OptionCreateManyArgs>;

export const OptionCreateManyZodSchema = z.object({ data: z.union([ OptionCreateManyInputObjectSchema, z.array(OptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();