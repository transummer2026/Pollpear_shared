import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollCreateManyInputObjectSchema as PollCreateManyInputObjectSchema } from './objects/PollCreateManyInput.schema';

export const PollCreateManySchema: z.ZodType<Prisma.PollCreateManyArgs> = z.object({ data: z.union([ PollCreateManyInputObjectSchema, z.array(PollCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PollCreateManyArgs>;

export const PollCreateManyZodSchema = z.object({ data: z.union([ PollCreateManyInputObjectSchema, z.array(PollCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();