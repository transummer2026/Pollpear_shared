import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateUpdateInputObjectSchema as PollTemplateUpdateInputObjectSchema } from './objects/PollTemplateUpdateInput.schema';
import { PollTemplateUncheckedUpdateInputObjectSchema as PollTemplateUncheckedUpdateInputObjectSchema } from './objects/PollTemplateUncheckedUpdateInput.schema';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './objects/PollTemplateWhereUniqueInput.schema';

export const PollTemplateUpdateOneSchema: z.ZodType<Prisma.PollTemplateUpdateArgs> = z.object({   data: z.union([PollTemplateUpdateInputObjectSchema, PollTemplateUncheckedUpdateInputObjectSchema]), where: PollTemplateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollTemplateUpdateArgs>;

export const PollTemplateUpdateOneZodSchema = z.object({   data: z.union([PollTemplateUpdateInputObjectSchema, PollTemplateUncheckedUpdateInputObjectSchema]), where: PollTemplateWhereUniqueInputObjectSchema }).strict();