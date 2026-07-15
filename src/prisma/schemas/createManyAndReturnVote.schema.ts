import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteSelectObjectSchema as VoteSelectObjectSchema } from './objects/VoteSelect.schema';
import { VoteCreateManyInputObjectSchema as VoteCreateManyInputObjectSchema } from './objects/VoteCreateManyInput.schema';

export const VoteCreateManyAndReturnSchema: z.ZodType<Prisma.VoteCreateManyAndReturnArgs> = z.object({ select: VoteSelectObjectSchema.optional(), data: z.union([ VoteCreateManyInputObjectSchema, z.array(VoteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.VoteCreateManyAndReturnArgs>;

export const VoteCreateManyAndReturnZodSchema = z.object({ select: VoteSelectObjectSchema.optional(), data: z.union([ VoteCreateManyInputObjectSchema, z.array(VoteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();