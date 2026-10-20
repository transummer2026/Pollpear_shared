import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencySelectObjectSchema as PollDependencySelectObjectSchema } from './objects/PollDependencySelect.schema';
import { PollDependencyIncludeObjectSchema as PollDependencyIncludeObjectSchema } from './objects/PollDependencyInclude.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './objects/PollDependencyWhereUniqueInput.schema';

export const PollDependencyFindUniqueSchema: z.ZodType<Prisma.PollDependencyFindUniqueArgs> = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), where: PollDependencyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollDependencyFindUniqueArgs>;

export const PollDependencyFindUniqueZodSchema = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), where: PollDependencyWhereUniqueInputObjectSchema }).strict();