import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateSelectObjectSchema as PollTemplateSelectObjectSchema } from './objects/PollTemplateSelect.schema';
import { PollTemplateIncludeObjectSchema as PollTemplateIncludeObjectSchema } from './objects/PollTemplateInclude.schema';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './objects/PollTemplateWhereUniqueInput.schema';

export const PollTemplateDeleteOneSchema: z.ZodType<Prisma.PollTemplateDeleteArgs> = z.object({ select: PollTemplateSelectObjectSchema.optional(), include: PollTemplateIncludeObjectSchema.optional(), where: PollTemplateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollTemplateDeleteArgs>;

export const PollTemplateDeleteOneZodSchema = z.object({ select: PollTemplateSelectObjectSchema.optional(), include: PollTemplateIncludeObjectSchema.optional(), where: PollTemplateWhereUniqueInputObjectSchema }).strict();