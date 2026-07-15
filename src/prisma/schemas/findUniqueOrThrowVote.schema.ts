import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteSelectObjectSchema as VoteSelectObjectSchema } from './objects/VoteSelect.schema';
import { VoteIncludeObjectSchema as VoteIncludeObjectSchema } from './objects/VoteInclude.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './objects/VoteWhereUniqueInput.schema';

export const VoteFindUniqueOrThrowSchema: z.ZodType<Prisma.VoteFindUniqueOrThrowArgs> = z.object({ select: VoteSelectObjectSchema.optional(), include: VoteIncludeObjectSchema.optional(), where: VoteWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VoteFindUniqueOrThrowArgs>;

export const VoteFindUniqueOrThrowZodSchema = z.object({ select: VoteSelectObjectSchema.optional(), include: VoteIncludeObjectSchema.optional(), where: VoteWhereUniqueInputObjectSchema }).strict();