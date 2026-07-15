import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollDependencySelectObjectSchema as PollDependencySelectObjectSchema } from './objects/PollDependencySelect.schema';
import { PollDependencyIncludeObjectSchema as PollDependencyIncludeObjectSchema } from './objects/PollDependencyInclude.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './objects/PollDependencyWhereUniqueInput.schema';
import { PollDependencyCreateInputObjectSchema as PollDependencyCreateInputObjectSchema } from './objects/PollDependencyCreateInput.schema';
import { PollDependencyUncheckedCreateInputObjectSchema as PollDependencyUncheckedCreateInputObjectSchema } from './objects/PollDependencyUncheckedCreateInput.schema';
import { PollDependencyUpdateInputObjectSchema as PollDependencyUpdateInputObjectSchema } from './objects/PollDependencyUpdateInput.schema';
import { PollDependencyUncheckedUpdateInputObjectSchema as PollDependencyUncheckedUpdateInputObjectSchema } from './objects/PollDependencyUncheckedUpdateInput.schema';

export const PollDependencyUpsertOneSchema: z.ZodType<Prisma.PollDependencyUpsertArgs> = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), where: PollDependencyWhereUniqueInputObjectSchema, create: z.union([ PollDependencyCreateInputObjectSchema, PollDependencyUncheckedCreateInputObjectSchema ]), update: z.union([ PollDependencyUpdateInputObjectSchema, PollDependencyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PollDependencyUpsertArgs>;

export const PollDependencyUpsertOneZodSchema = z.object({ select: PollDependencySelectObjectSchema.optional(), include: PollDependencyIncludeObjectSchema.optional(), where: PollDependencyWhereUniqueInputObjectSchema, create: z.union([ PollDependencyCreateInputObjectSchema, PollDependencyUncheckedCreateInputObjectSchema ]), update: z.union([ PollDependencyUpdateInputObjectSchema, PollDependencyUncheckedUpdateInputObjectSchema ]) }).strict();