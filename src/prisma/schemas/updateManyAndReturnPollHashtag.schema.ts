import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagSelectObjectSchema as PollHashtagSelectObjectSchema } from './objects/PollHashtagSelect.schema';
import { PollHashtagUpdateManyMutationInputObjectSchema as PollHashtagUpdateManyMutationInputObjectSchema } from './objects/PollHashtagUpdateManyMutationInput.schema';
import { PollHashtagWhereInputObjectSchema as PollHashtagWhereInputObjectSchema } from './objects/PollHashtagWhereInput.schema';

export const PollHashtagUpdateManyAndReturnSchema: z.ZodType<Prisma.PollHashtagUpdateManyAndReturnArgs> = z.object({ select: PollHashtagSelectObjectSchema.optional(), data: PollHashtagUpdateManyMutationInputObjectSchema, where: PollHashtagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollHashtagUpdateManyAndReturnArgs>;

export const PollHashtagUpdateManyAndReturnZodSchema = z.object({ select: PollHashtagSelectObjectSchema.optional(), data: PollHashtagUpdateManyMutationInputObjectSchema, where: PollHashtagWhereInputObjectSchema.optional() }).strict();