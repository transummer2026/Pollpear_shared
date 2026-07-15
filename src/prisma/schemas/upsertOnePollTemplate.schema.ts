import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateSelectObjectSchema as PollTemplateSelectObjectSchema } from './objects/PollTemplateSelect.schema';
import { PollTemplateIncludeObjectSchema as PollTemplateIncludeObjectSchema } from './objects/PollTemplateInclude.schema';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './objects/PollTemplateWhereUniqueInput.schema';
import { PollTemplateCreateInputObjectSchema as PollTemplateCreateInputObjectSchema } from './objects/PollTemplateCreateInput.schema';
import { PollTemplateUncheckedCreateInputObjectSchema as PollTemplateUncheckedCreateInputObjectSchema } from './objects/PollTemplateUncheckedCreateInput.schema';
import { PollTemplateUpdateInputObjectSchema as PollTemplateUpdateInputObjectSchema } from './objects/PollTemplateUpdateInput.schema';
import { PollTemplateUncheckedUpdateInputObjectSchema as PollTemplateUncheckedUpdateInputObjectSchema } from './objects/PollTemplateUncheckedUpdateInput.schema';

export const PollTemplateUpsertOneSchema: z.ZodType<Prisma.PollTemplateUpsertArgs> = z.object({ select: PollTemplateSelectObjectSchema.optional(), include: PollTemplateIncludeObjectSchema.optional(), where: PollTemplateWhereUniqueInputObjectSchema, create: z.union([ PollTemplateCreateInputObjectSchema, PollTemplateUncheckedCreateInputObjectSchema ]), update: z.union([ PollTemplateUpdateInputObjectSchema, PollTemplateUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PollTemplateUpsertArgs>;

export const PollTemplateUpsertOneZodSchema = z.object({ select: PollTemplateSelectObjectSchema.optional(), include: PollTemplateIncludeObjectSchema.optional(), where: PollTemplateWhereUniqueInputObjectSchema, create: z.union([ PollTemplateCreateInputObjectSchema, PollTemplateUncheckedCreateInputObjectSchema ]), update: z.union([ PollTemplateUpdateInputObjectSchema, PollTemplateUncheckedUpdateInputObjectSchema ]) }).strict();