import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionSelectObjectSchema as VoteOptionSelectObjectSchema } from './objects/VoteOptionSelect.schema';
import { VoteOptionIncludeObjectSchema as VoteOptionIncludeObjectSchema } from './objects/VoteOptionInclude.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './objects/VoteOptionWhereUniqueInput.schema';

export const VoteOptionFindUniqueOrThrowSchema: z.ZodType<Prisma.VoteOptionFindUniqueOrThrowArgs> = z.object({ select: VoteOptionSelectObjectSchema.optional(), include: VoteOptionIncludeObjectSchema.optional(), where: VoteOptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VoteOptionFindUniqueOrThrowArgs>;

export const VoteOptionFindUniqueOrThrowZodSchema = z.object({ select: VoteOptionSelectObjectSchema.optional(), include: VoteOptionIncludeObjectSchema.optional(), where: VoteOptionWhereUniqueInputObjectSchema }).strict();