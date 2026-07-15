import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagUpdateManyMutationInputObjectSchema as PollHashtagUpdateManyMutationInputObjectSchema } from './objects/PollHashtagUpdateManyMutationInput.schema';
import { PollHashtagWhereInputObjectSchema as PollHashtagWhereInputObjectSchema } from './objects/PollHashtagWhereInput.schema';

export const PollHashtagUpdateManySchema: z.ZodType<Prisma.PollHashtagUpdateManyArgs> = z.object({ data: PollHashtagUpdateManyMutationInputObjectSchema, where: PollHashtagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollHashtagUpdateManyArgs>;

export const PollHashtagUpdateManyZodSchema = z.object({ data: PollHashtagUpdateManyMutationInputObjectSchema, where: PollHashtagWhereInputObjectSchema.optional() }).strict();