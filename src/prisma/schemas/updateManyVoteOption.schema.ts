import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionUpdateManyMutationInputObjectSchema as VoteOptionUpdateManyMutationInputObjectSchema } from './objects/VoteOptionUpdateManyMutationInput.schema';
import { VoteOptionWhereInputObjectSchema as VoteOptionWhereInputObjectSchema } from './objects/VoteOptionWhereInput.schema';

export const VoteOptionUpdateManySchema: z.ZodType<Prisma.VoteOptionUpdateManyArgs> = z.object({ data: VoteOptionUpdateManyMutationInputObjectSchema, where: VoteOptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoteOptionUpdateManyArgs>;

export const VoteOptionUpdateManyZodSchema = z.object({ data: VoteOptionUpdateManyMutationInputObjectSchema, where: VoteOptionWhereInputObjectSchema.optional() }).strict();