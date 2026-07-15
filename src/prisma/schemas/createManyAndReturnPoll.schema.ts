import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollSelectObjectSchema as PollSelectObjectSchema } from './objects/PollSelect.schema';
import { PollCreateManyInputObjectSchema as PollCreateManyInputObjectSchema } from './objects/PollCreateManyInput.schema';

export const PollCreateManyAndReturnSchema: z.ZodType<Prisma.PollCreateManyAndReturnArgs> = z.object({ select: PollSelectObjectSchema.optional(), data: z.union([ PollCreateManyInputObjectSchema, z.array(PollCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PollCreateManyAndReturnArgs>;

export const PollCreateManyAndReturnZodSchema = z.object({ select: PollSelectObjectSchema.optional(), data: z.union([ PollCreateManyInputObjectSchema, z.array(PollCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();