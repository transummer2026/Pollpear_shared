import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteCreateManyInputObjectSchema as VoteCreateManyInputObjectSchema } from './objects/VoteCreateManyInput.schema';

export const VoteCreateManySchema: z.ZodType<Prisma.VoteCreateManyArgs> = z.object({ data: z.union([ VoteCreateManyInputObjectSchema, z.array(VoteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VoteCreateManyArgs>;

export const VoteCreateManyZodSchema = z.object({ data: z.union([ VoteCreateManyInputObjectSchema, z.array(VoteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();