import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const hashtagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => HashtagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HashtagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HashtagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HashtagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => HashtagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  isVisible: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const HashtagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.HashtagScalarWhereWithAggregatesInput> = hashtagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.HashtagScalarWhereWithAggregatesInput>;
export const HashtagScalarWhereWithAggregatesInputObjectZodSchema = hashtagscalarwherewithaggregatesinputSchema;
