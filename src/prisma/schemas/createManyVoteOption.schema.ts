import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionCreateManyInputObjectSchema as VoteOptionCreateManyInputObjectSchema } from './objects/VoteOptionCreateManyInput.schema';

export const VoteOptionCreateManySchema: z.ZodType<Prisma.VoteOptionCreateManyArgs> = z.object({ data: z.union([ VoteOptionCreateManyInputObjectSchema, z.array(VoteOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VoteOptionCreateManyArgs>;

export const VoteOptionCreateManyZodSchema = z.object({ data: z.union([ VoteOptionCreateManyInputObjectSchema, z.array(VoteOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();