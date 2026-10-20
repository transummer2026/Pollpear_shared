import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateWhereInputObjectSchema as PollTemplateWhereInputObjectSchema } from './objects/PollTemplateWhereInput.schema';

export const PollTemplateDeleteManySchema: z.ZodType<Prisma.PollTemplateDeleteManyArgs> = z.object({ where: PollTemplateWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PollTemplateDeleteManyArgs>;

export const PollTemplateDeleteManyZodSchema = z.object({ where: PollTemplateWhereInputObjectSchema.optional() }).strict();