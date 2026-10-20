import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencySelectObjectSchema as PollDependencySelectObjectSchema } from './objects/PollDependencySelect.schema';
import { PollDependencyUpdateManyMutationInputObjectSchema as PollDependencyUpdateManyMutationInputObjectSchema } from './objects/PollDependencyUpdateManyMutationInput.schema';
import { PollDependencyWhereInputObjectSchema as PollDependencyWhereInputObjectSchema } from './objects/PollDependencyWhereInput.schema';

export const PollDependencyUpdateManyAndReturnSchema: z.ZodType<Prisma.PollDependencyUpdateManyAndReturnArgs> = z.object({ select: PollDependencySelectObjectSchema.optional(), data: PollDependencyUpdateManyMutationInputObjectSchema, where: PollDependencyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollDependencyUpdateManyAndReturnArgs>;

export const PollDependencyUpdateManyAndReturnZodSchema = z.object({ select: PollDependencySelectObjectSchema.optional(), data: PollDependencyUpdateManyMutationInputObjectSchema, where: PollDependencyWhereInputObjectSchema.optional() }).strict();