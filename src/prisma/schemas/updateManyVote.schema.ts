import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { VoteUpdateManyMutationInputObjectSchema as VoteUpdateManyMutationInputObjectSchema } from './objects/VoteUpdateManyMutationInput.schema';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './objects/VoteWhereInput.schema';

export const VoteUpdateManySchema: z.ZodType<Prisma.VoteUpdateManyArgs> = z.object({ data: VoteUpdateManyMutationInputObjectSchema, where: VoteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VoteUpdateManyArgs>;

export const VoteUpdateManyZodSchema = z.object({ data: VoteUpdateManyMutationInputObjectSchema, where: VoteWhereInputObjectSchema.optional() }).strict();