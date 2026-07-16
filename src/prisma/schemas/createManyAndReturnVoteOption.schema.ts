import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionSelectObjectSchema as VoteOptionSelectObjectSchema } from './objects/VoteOptionSelect.schema';
import { VoteOptionCreateManyInputObjectSchema as VoteOptionCreateManyInputObjectSchema } from './objects/VoteOptionCreateManyInput.schema';

export const VoteOptionCreateManyAndReturnSchema: z.ZodType<Prisma.VoteOptionCreateManyAndReturnArgs> = z.object({ select: VoteOptionSelectObjectSchema.optional(), data: z.union([ VoteOptionCreateManyInputObjectSchema, z.array(VoteOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VoteOptionCreateManyAndReturnArgs>;

export const VoteOptionCreateManyAndReturnZodSchema = z.object({ select: VoteOptionSelectObjectSchema.optional(), data: z.union([ VoteOptionCreateManyInputObjectSchema, z.array(VoteOptionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();