import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollSelectObjectSchema as PollSelectObjectSchema } from './objects/PollSelect.schema';
import { PollUpdateManyMutationInputObjectSchema as PollUpdateManyMutationInputObjectSchema } from './objects/PollUpdateManyMutationInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './objects/PollWhereInput.schema';

export const PollUpdateManyAndReturnSchema: z.ZodType<Prisma.PollUpdateManyAndReturnArgs> = z.object({ select: PollSelectObjectSchema.optional(), data: PollUpdateManyMutationInputObjectSchema, where: PollWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollUpdateManyAndReturnArgs>;

export const PollUpdateManyAndReturnZodSchema = z.object({ select: PollSelectObjectSchema.optional(), data: PollUpdateManyMutationInputObjectSchema, where: PollWhereInputObjectSchema.optional() }).strict();