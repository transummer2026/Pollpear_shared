import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { NestedEnumVisibilityNullableWithAggregatesFilterObjectSchema as NestedEnumVisibilityNullableWithAggregatesFilterObjectSchema } from './NestedEnumVisibilityNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumVisibilityNullableFilterObjectSchema as NestedEnumVisibilityNullableFilterObjectSchema } from './NestedEnumVisibilityNullableFilter.schema'

const makeSchema = () => z.object({
  equals: VisibilitySchema.optional().nullable(),
  in: VisibilitySchema.array().optional().nullable(),
  notIn: VisibilitySchema.array().optional().nullable(),
  not: z.union([VisibilitySchema, z.lazy(() => NestedEnumVisibilityNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumVisibilityNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumVisibilityNullableFilterObjectSchema).optional()
}).strict();
export const EnumVisibilityNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumVisibilityNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumVisibilityNullableWithAggregatesFilter>;
export const EnumVisibilityNullableWithAggregatesFilterObjectZodSchema = makeSchema();
