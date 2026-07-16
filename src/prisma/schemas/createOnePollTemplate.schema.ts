import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateSelectObjectSchema as PollTemplateSelectObjectSchema } from './objects/PollTemplateSelect.schema';
import { PollTemplateIncludeObjectSchema as PollTemplateIncludeObjectSchema } from './objects/PollTemplateInclude.schema';
import { PollTemplateCreateInputObjectSchema as PollTemplateCreateInputObjectSchema } from './objects/PollTemplateCreateInput.schema';
import { PollTemplateUncheckedCreateInputObjectSchema as PollTemplateUncheckedCreateInputObjectSchema } from './objects/PollTemplateUncheckedCreateInput.schema';

export const PollTemplateCreateOneSchema: z.ZodType<Prisma.PollTemplateCreateArgs> = z.object({ select: PollTemplateSelectObjectSchema.optional(), include: PollTemplateIncludeObjectSchema.optional(), data: z.union([PollTemplateCreateInputObjectSchema, PollTemplateUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PollTemplateCreateArgs>;

export const PollTemplateCreateOneZodSchema = z.object({ select: PollTemplateSelectObjectSchema.optional(), include: PollTemplateIncludeObjectSchema.optional(), data: z.union([PollTemplateCreateInputObjectSchema, PollTemplateUncheckedCreateInputObjectSchema]) }).strict();