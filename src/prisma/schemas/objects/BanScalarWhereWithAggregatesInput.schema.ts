import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const banscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BanScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BanScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BanScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BanScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BanScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  banReason: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  unbanReason: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  startedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  endedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  bannedById: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  unbannedById: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const BanScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BanScalarWhereWithAggregatesInput> = banscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BanScalarWhereWithAggregatesInput>;
export const BanScalarWhereWithAggregatesInputObjectZodSchema = banscalarwherewithaggregatesinputSchema;
