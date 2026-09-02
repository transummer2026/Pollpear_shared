import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencySelectObjectSchema as PollDependencySelectObjectSchema } from './objects/PollDependencySelect.schema';
import { PollDependencyIncludeObjectSchema as PollDependencyIncludeObjectSchema } from './objects/PollDependencyInclude.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './objects/PollDependencyWhereUniqueInput.schema';

export const PollDependencyDeleteOneSchema: z.ZodType<Prisma.PollDependencyDeleteArgs> = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), where: PollDependencyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollDependencyDeleteArgs>;

export const PollDependencyDeleteOneZodSchema = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), where: PollDependencyWhereUniqueInputObjectSchema }).strict();