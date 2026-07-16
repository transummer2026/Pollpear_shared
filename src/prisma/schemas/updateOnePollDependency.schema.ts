import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencySelectObjectSchema as PollDependencySelectObjectSchema } from './objects/PollDependencySelect.schema';
import { PollDependencyIncludeObjectSchema as PollDependencyIncludeObjectSchema } from './objects/PollDependencyInclude.schema';
import { PollDependencyUpdateInputObjectSchema as PollDependencyUpdateInputObjectSchema } from './objects/PollDependencyUpdateInput.schema';
import { PollDependencyUncheckedUpdateInputObjectSchema as PollDependencyUncheckedUpdateInputObjectSchema } from './objects/PollDependencyUncheckedUpdateInput.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './objects/PollDependencyWhereUniqueInput.schema';

export const PollDependencyUpdateOneSchema: z.ZodType<Prisma.PollDependencyUpdateArgs> = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), data: z.union([PollDependencyUpdateInputObjectSchema, PollDependencyUncheckedUpdateInputObjectSchema]), where: PollDependencyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollDependencyUpdateArgs>;

export const PollDependencyUpdateOneZodSchema = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), data: z.union([PollDependencyUpdateInputObjectSchema, PollDependencyUncheckedUpdateInputObjectSchema]), where: PollDependencyWhereUniqueInputObjectSchema }).strict();