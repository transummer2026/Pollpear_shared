import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencySelectObjectSchema as PollDependencySelectObjectSchema } from './objects/PollDependencySelect.schema';
import { PollDependencyIncludeObjectSchema as PollDependencyIncludeObjectSchema } from './objects/PollDependencyInclude.schema';
import { PollDependencyCreateInputObjectSchema as PollDependencyCreateInputObjectSchema } from './objects/PollDependencyCreateInput.schema';
import { PollDependencyUncheckedCreateInputObjectSchema as PollDependencyUncheckedCreateInputObjectSchema } from './objects/PollDependencyUncheckedCreateInput.schema';

export const PollDependencyCreateOneSchema: z.ZodType<Prisma.PollDependencyCreateArgs> = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), data: z.union([PollDependencyCreateInputObjectSchema, PollDependencyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PollDependencyCreateArgs>;

export const PollDependencyCreateOneZodSchema = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), data: z.union([PollDependencyCreateInputObjectSchema, PollDependencyUncheckedCreateInputObjectSchema]) }).strict();