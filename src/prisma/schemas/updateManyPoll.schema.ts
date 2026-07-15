import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollUpdateManyMutationInputObjectSchema as PollUpdateManyMutationInputObjectSchema } from './objects/PollUpdateManyMutationInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './objects/PollWhereInput.schema';

export const PollUpdateManySchema: z.ZodType<Prisma.PollUpdateManyArgs> = z.object({ data: PollUpdateManyMutationInputObjectSchema, where: PollWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollUpdateManyArgs>;

export const PollUpdateManyZodSchema = z.object({ data: PollUpdateManyMutationInputObjectSchema, where: PollWhereInputObjectSchema.optional() }).strict();