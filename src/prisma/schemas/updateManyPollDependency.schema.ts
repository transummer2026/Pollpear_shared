import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencyUpdateManyMutationInputObjectSchema as PollDependencyUpdateManyMutationInputObjectSchema } from './objects/PollDependencyUpdateManyMutationInput.schema';
import { PollDependencyWhereInputObjectSchema as PollDependencyWhereInputObjectSchema } from './objects/PollDependencyWhereInput.schema';

export const PollDependencyUpdateManySchema: z.ZodType<Prisma.PollDependencyUpdateManyArgs> = z.object({ data: PollDependencyUpdateManyMutationInputObjectSchema, where: PollDependencyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollDependencyUpdateManyArgs>;

export const PollDependencyUpdateManyZodSchema = z.object({ data: PollDependencyUpdateManyMutationInputObjectSchema, where: PollDependencyWhereInputObjectSchema.optional() }).strict();