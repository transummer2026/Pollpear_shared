import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { PollTemplateSelectObjectSchema as PollTemplateSelectObjectSchema } from './objects/PollTemplateSelect.schema';
import { PollTemplateCreateManyInputObjectSchema as PollTemplateCreateManyInputObjectSchema } from './objects/PollTemplateCreateManyInput.schema';

export const PollTemplateCreateManyAndReturnSchema: z.ZodType<Prisma.PollTemplateCreateManyAndReturnArgs> = z.object({ select: PollTemplateSelectObjectSchema.optional(), data: z.union([ PollTemplateCreateManyInputObjectSchema, z.array(PollTemplateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PollTemplateCreateManyAndReturnArgs>;

export const PollTemplateCreateManyAndReturnZodSchema = z.object({ select: PollTemplateSelectObjectSchema.optional(), data: z.union([ PollTemplateCreateManyInputObjectSchema, z.array(PollTemplateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();