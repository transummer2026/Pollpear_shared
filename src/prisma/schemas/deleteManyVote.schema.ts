import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';

export const VoteDeleteManySchema: z.ZodType<Prisma.VoteDeleteManyArgs> = z.object({ where: VoteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoteDeleteManyArgs>;

export const VoteDeleteManyZodSchema = z.object({ where: VoteWhereInputObjectSchema.optional() }).strict();