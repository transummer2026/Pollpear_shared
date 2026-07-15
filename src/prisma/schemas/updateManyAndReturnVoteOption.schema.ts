import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionSelectObjectSchema as VoteOptionSelectObjectSchema } from './objects/VoteOptionSelect.schema';
import { VoteOptionUpdateManyMutationInputObjectSchema as VoteOptionUpdateManyMutationInputObjectSchema } from './objects/VoteOptionUpdateManyMutationInput.schema';
import { VoteOptionWhereInputObjectSchema as VoteOptionWhereInputObjectSchema } from './objects/VoteOptionWhereInput.schema';

export const VoteOptionUpdateManyAndReturnSchema: z.ZodType<Prisma.VoteOptionUpdateManyAndReturnArgs> = z.object({ select: VoteOptionSelectObjectSchema.optional(), data: VoteOptionUpdateManyMutationInputObjectSchema, where: VoteOptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoteOptionUpdateManyAndReturnArgs>;

export const VoteOptionUpdateManyAndReturnZodSchema = z.object({ select: VoteOptionSelectObjectSchema.optional(), data: VoteOptionUpdateManyMutationInputObjectSchema, where: VoteOptionWhereInputObjectSchema.optional() }).strict();