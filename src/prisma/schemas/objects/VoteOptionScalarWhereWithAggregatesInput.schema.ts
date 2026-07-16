import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const voteoptionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VoteOptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VoteOptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VoteOptionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VoteOptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VoteOptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  voteId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  optionId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const VoteOptionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VoteOptionScalarWhereWithAggregatesInput> = voteoptionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VoteOptionScalarWhereWithAggregatesInput>;
export const VoteOptionScalarWhereWithAggregatesInputObjectZodSchema = voteoptionscalarwherewithaggregatesinputSchema;
