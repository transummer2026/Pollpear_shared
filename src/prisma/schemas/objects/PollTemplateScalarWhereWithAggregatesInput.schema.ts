import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const polltemplatescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PollTemplateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PollTemplateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollTemplateScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollTemplateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PollTemplateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  pollId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const PollTemplateScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PollTemplateScalarWhereWithAggregatesInput> = polltemplatescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PollTemplateScalarWhereWithAggregatesInput>;
export const PollTemplateScalarWhereWithAggregatesInputObjectZodSchema = polltemplatescalarwherewithaggregatesinputSchema;
