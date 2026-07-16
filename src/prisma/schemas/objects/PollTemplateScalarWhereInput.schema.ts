import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const polltemplatescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PollTemplateScalarWhereInputObjectSchema), z.lazy(() => PollTemplateScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollTemplateScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollTemplateScalarWhereInputObjectSchema), z.lazy(() => PollTemplateScalarWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  pollId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const PollTemplateScalarWhereInputObjectSchema: z.ZodType<Prisma.PollTemplateScalarWhereInput> = polltemplatescalarwhereinputSchema as unknown as z.ZodType<Prisma.PollTemplateScalarWhereInput>;
export const PollTemplateScalarWhereInputObjectZodSchema = polltemplatescalarwhereinputSchema;
