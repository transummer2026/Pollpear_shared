import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollHashtagWhereInputObjectSchema as PollHashtagWhereInputObjectSchema } from './objects/PollHashtagWhereInput.schema';

export const PollHashtagDeleteManySchema: z.ZodType<Prisma.PollHashtagDeleteManyArgs> = z.object({ where: PollHashtagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollHashtagDeleteManyArgs>;

export const PollHashtagDeleteManyZodSchema = z.object({ where: PollHashtagWhereInputObjectSchema.optional() }).strict();