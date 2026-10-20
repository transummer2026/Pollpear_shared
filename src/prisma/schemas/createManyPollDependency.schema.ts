import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencyCreateManyInputObjectSchema as PollDependencyCreateManyInputObjectSchema } from './objects/PollDependencyCreateManyInput.schema';

export const PollDependencyCreateManySchema: z.ZodType<Prisma.PollDependencyCreateManyArgs> = z.object({ data: z.union([ PollDependencyCreateManyInputObjectSchema, z.array(PollDependencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PollDependencyCreateManyArgs>;

export const PollDependencyCreateManyZodSchema = z.object({ data: z.union([ PollDependencyCreateManyInputObjectSchema, z.array(PollDependencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();