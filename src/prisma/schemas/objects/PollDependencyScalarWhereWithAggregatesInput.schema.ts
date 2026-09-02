import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const polldependencyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PollDependencyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PollDependencyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollDependencyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollDependencyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PollDependencyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  childPollId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  optionId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const PollDependencyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PollDependencyScalarWhereWithAggregatesInput> = polldependencyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PollDependencyScalarWhereWithAggregatesInput>;
export const PollDependencyScalarWhereWithAggregatesInputObjectZodSchema = polldependencyscalarwherewithaggregatesinputSchema;
