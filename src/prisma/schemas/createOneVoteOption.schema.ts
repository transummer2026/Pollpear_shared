import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionSelectObjectSchema as VoteOptionSelectObjectSchema } from './objects/VoteOptionSelect.schema';
import { VoteOptionIncludeObjectSchema as VoteOptionIncludeObjectSchema } from './objects/VoteOptionInclude.schema';
import { VoteOptionCreateInputObjectSchema as VoteOptionCreateInputObjectSchema } from './objects/VoteOptionCreateInput.schema';
import { VoteOptionUncheckedCreateInputObjectSchema as VoteOptionUncheckedCreateInputObjectSchema } from './objects/VoteOptionUncheckedCreateInput.schema';

export const VoteOptionCreateOneSchema: z.ZodType<Prisma.VoteOptionCreateArgs> = z.object({ select: VoteOptionSelectObjectSchema.optional(), include: VoteOptionIncludeObjectSchema.optional(), data: z.union([VoteOptionCreateInputObjectSchema, VoteOptionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.VoteOptionCreateArgs>;

export const VoteOptionCreateOneZodSchema = z.object({ select: VoteOptionSelectObjectSchema.optional(), include: VoteOptionIncludeObjectSchema.optional(), data: z.union([VoteOptionCreateInputObjectSchema, VoteOptionUncheckedCreateInputObjectSchema]) }).strict();