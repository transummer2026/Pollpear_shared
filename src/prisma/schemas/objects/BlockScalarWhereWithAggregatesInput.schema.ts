import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const blockscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BlockScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BlockScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BlockScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BlockScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BlockScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  blockerId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  blockedId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const BlockScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BlockScalarWhereWithAggregatesInput> = blockscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BlockScalarWhereWithAggregatesInput>;
export const BlockScalarWhereWithAggregatesInputObjectZodSchema = blockscalarwherewithaggregatesinputSchema;
