import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionUpdateInputObjectSchema as VoteOptionUpdateInputObjectSchema } from './objects/VoteOptionUpdateInput.schema';
import { VoteOptionUncheckedUpdateInputObjectSchema as VoteOptionUncheckedUpdateInputObjectSchema } from './objects/VoteOptionUncheckedUpdateInput.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './objects/VoteOptionWhereUniqueInput.schema';

export const VoteOptionUpdateOneSchema: z.ZodType<Prisma.VoteOptionUpdateArgs> = z.object({   data: z.union([VoteOptionUpdateInputObjectSchema, VoteOptionUncheckedUpdateInputObjectSchema]), where: VoteOptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VoteOptionUpdateArgs>;

export const VoteOptionUpdateOneZodSchema = z.object({   data: z.union([VoteOptionUpdateInputObjectSchema, VoteOptionUncheckedUpdateInputObjectSchema]), where: VoteOptionWhereUniqueInputObjectSchema }).strict();