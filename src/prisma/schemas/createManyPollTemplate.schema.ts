import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateCreateManyInputObjectSchema as PollTemplateCreateManyInputObjectSchema } from './objects/PollTemplateCreateManyInput.schema';

export const PollTemplateCreateManySchema: z.ZodType<Prisma.PollTemplateCreateManyArgs> = z.object({ data: z.union([ PollTemplateCreateManyInputObjectSchema, z.array(PollTemplateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PollTemplateCreateManyArgs>;

export const PollTemplateCreateManyZodSchema = z.object({ data: z.union([ PollTemplateCreateManyInputObjectSchema, z.array(PollTemplateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();