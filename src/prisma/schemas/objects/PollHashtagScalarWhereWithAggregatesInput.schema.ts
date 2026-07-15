import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const pollhashtagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PollHashtagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PollHashtagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollHashtagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollHashtagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PollHashtagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  pollId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  hashtagId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const PollHashtagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PollHashtagScalarWhereWithAggregatesInput> = pollhashtagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PollHashtagScalarWhereWithAggregatesInput>;
export const PollHashtagScalarWhereWithAggregatesInputObjectZodSchema = pollhashtagscalarwherewithaggregatesinputSchema;
