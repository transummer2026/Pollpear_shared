import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionSelectObjectSchema as VoteOptionSelectObjectSchema } from './objects/VoteOptionSelect.schema';
import { VoteOptionIncludeObjectSchema as VoteOptionIncludeObjectSchema } from './objects/VoteOptionInclude.schema';
import { VoteOptionUpdateInputObjectSchema as VoteOptionUpdateInputObjectSchema } from './objects/VoteOptionUpdateInput.schema';
import { VoteOptionUncheckedUpdateInputObjectSchema as VoteOptionUncheckedUpdateInputObjectSchema } from './objects/VoteOptionUncheckedUpdateInput.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './objects/VoteOptionWhereUniqueInput.schema';

export const VoteOptionUpdateOneSchema: z.ZodType<Prisma.VoteOptionUpdateArgs> = z.object({ select: VoteOptionSelectObjectSchema.optional(), include: VoteOptionIncludeObjectSchema.optional(), data: z.union([VoteOptionUpdateInputObjectSchema, VoteOptionUncheckedUpdateInputObjectSchema]), where: VoteOptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VoteOptionUpdateArgs>;

export const VoteOptionUpdateOneZodSchema = z.object({ select: VoteOptionSelectObjectSchema.optional(), include: VoteOptionIncludeObjectSchema.optional(), data: z.union([VoteOptionUpdateInputObjectSchema, VoteOptionUncheckedUpdateInputObjectSchema]), where: VoteOptionWhereUniqueInputObjectSchema }).strict();