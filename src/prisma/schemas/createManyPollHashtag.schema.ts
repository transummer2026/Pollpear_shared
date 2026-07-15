import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagCreateManyInputObjectSchema as PollHashtagCreateManyInputObjectSchema } from './objects/PollHashtagCreateManyInput.schema';

export const PollHashtagCreateManySchema: z.ZodType<Prisma.PollHashtagCreateManyArgs> = z.object({ data: z.union([ PollHashtagCreateManyInputObjectSchema, z.array(PollHashtagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PollHashtagCreateManyArgs>;

export const PollHashtagCreateManyZodSchema = z.object({ data: z.union([ PollHashtagCreateManyInputObjectSchema, z.array(PollHashtagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();