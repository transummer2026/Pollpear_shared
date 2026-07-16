import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './objects/PollWhereInput.schema';

export const PollDeleteManySchema: z.ZodType<Prisma.PollDeleteManyArgs> = z.object({ where: PollWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollDeleteManyArgs>;

export const PollDeleteManyZodSchema = z.object({ where: PollWhereInputObjectSchema.optional() }).strict();