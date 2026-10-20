import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencySelectObjectSchema as PollDependencySelectObjectSchema } from './objects/PollDependencySelect.schema';
import { PollDependencyCreateManyInputObjectSchema as PollDependencyCreateManyInputObjectSchema } from './objects/PollDependencyCreateManyInput.schema';

export const PollDependencyCreateManyAndReturnSchema: z.ZodType<Prisma.PollDependencyCreateManyAndReturnArgs> = z.object({ select: PollDependencySelectObjectSchema.optional(), data: z.union([ PollDependencyCreateManyInputObjectSchema, z.array(PollDependencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PollDependencyCreateManyAndReturnArgs>;

export const PollDependencyCreateManyAndReturnZodSchema = z.object({ select: PollDependencySelectObjectSchema.optional(), data: z.union([ PollDependencyCreateManyInputObjectSchema, z.array(PollDependencyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();