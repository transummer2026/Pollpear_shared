import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './objects/PollTemplateWhereUniqueInput.schema';

export const PollTemplateFindUniqueSchema: z.ZodType<Prisma.PollTemplateFindUniqueArgs> = z.object({   where: PollTemplateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PollTemplateFindUniqueArgs>;

export const PollTemplateFindUniqueZodSchema = z.object({   where: PollTemplateWhereUniqueInputObjectSchema }).strict();