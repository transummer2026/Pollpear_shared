import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const apikeyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  keyHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  appName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  revoked: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  expiredAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  ownerId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ApiKeyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ApiKeyScalarWhereWithAggregatesInput> = apikeyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ApiKeyScalarWhereWithAggregatesInput>;
export const ApiKeyScalarWhereWithAggregatesInputObjectZodSchema = apikeyscalarwherewithaggregatesinputSchema;
