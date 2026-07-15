import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionSelectObjectSchema as VoteOptionSelectObjectSchema } from './objects/VoteOptionSelect.schema';
import { VoteOptionIncludeObjectSchema as VoteOptionIncludeObjectSchema } from './objects/VoteOptionInclude.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './objects/VoteOptionWhereUniqueInput.schema';
import { VoteOptionCreateInputObjectSchema as VoteOptionCreateInputObjectSchema } from './objects/VoteOptionCreateInput.schema';
import { VoteOptionUncheckedCreateInputObjectSchema as VoteOptionUncheckedCreateInputObjectSchema } from './objects/VoteOptionUncheckedCreateInput.schema';
import { VoteOptionUpdateInputObjectSchema as VoteOptionUpdateInputObjectSchema } from './objects/VoteOptionUpdateInput.schema';
import { VoteOptionUncheckedUpdateInputObjectSchema as VoteOptionUncheckedUpdateInputObjectSchema } from './objects/VoteOptionUncheckedUpdateInput.schema';

export const VoteOptionUpsertOneSchema: z.ZodType<Prisma.VoteOptionUpsertArgs> = z.object({ select: VoteOptionSelectObjectSchema.optional(), include: VoteOptionIncludeObjectSchema.optional(), where: VoteOptionWhereUniqueInputObjectSchema, create: z.union([ VoteOptionCreateInputObjectSchema, VoteOptionUncheckedCreateInputObjectSchema ]), update: z.union([ VoteOptionUpdateInputObjectSchema, VoteOptionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.VoteOptionUpsertArgs>;

export const VoteOptionUpsertOneZodSchema = z.object({ select: VoteOptionSelectObjectSchema.optional(), include: VoteOptionIncludeObjectSchema.optional(), where: VoteOptionWhereUniqueInputObjectSchema, create: z.union([ VoteOptionCreateInputObjectSchema, VoteOptionUncheckedCreateInputObjectSchema ]), update: z.union([ VoteOptionUpdateInputObjectSchema, VoteOptionUncheckedUpdateInputObjectSchema ]) }).strict();