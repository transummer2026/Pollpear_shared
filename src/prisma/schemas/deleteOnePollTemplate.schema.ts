import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './objects/PollTemplateWhereUniqueInput.schema';

export const PollTemplateDeleteOneSchema: z.ZodType<Prisma.PollTemplateDeleteArgs> = z.object({   where: PollTemplateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollTemplateDeleteArgs>;

export const PollTemplateDeleteOneZodSchema = z.object({   where: PollTemplateWhereUniqueInputObjectSchema }).strict();