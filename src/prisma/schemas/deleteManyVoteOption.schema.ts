import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteOptionWhereInputObjectSchema as VoteOptionWhereInputObjectSchema } from './objects/VoteOptionWhereInput.schema';

export const VoteOptionDeleteManySchema: z.ZodType<Prisma.VoteOptionDeleteManyArgs> = z.object({ where: VoteOptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoteOptionDeleteManyArgs>;

export const VoteOptionDeleteManyZodSchema = z.object({ where: VoteOptionWhereInputObjectSchema.optional() }).strict();