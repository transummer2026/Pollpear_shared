import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencyWhereInputObjectSchema as PollDependencyWhereInputObjectSchema } from './objects/PollDependencyWhereInput.schema';

export const PollDependencyDeleteManySchema: z.ZodType<Prisma.PollDependencyDeleteManyArgs> = z.object({ where: PollDependencyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollDependencyDeleteManyArgs>;

export const PollDependencyDeleteManyZodSchema = z.object({ where: PollDependencyWhereInputObjectSchema.optional() }).strict();