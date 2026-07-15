import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { GrantTypeSchema } from '../enums/GrantType.schema';
import { NestedEnumGrantTypeWithAggregatesFilterObjectSchema as NestedEnumGrantTypeWithAggregatesFilterObjectSchema } from './NestedEnumGrantTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGrantTypeFilterObjectSchema as NestedEnumGrantTypeFilterObjectSchema } from './NestedEnumGrantTypeFilter.schema'

const makeSchema = () => z.object({
  equals: GrantTypeSchema.optional(),
  in: GrantTypeSchema.array().optional(),
  notIn: GrantTypeSchema.array().optional(),
  not: z.union([GrantTypeSchema, z.lazy(() => NestedEnumGrantTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGrantTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGrantTypeFilterObjectSchema).optional()
}).strict();
export const EnumGrantTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumGrantTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGrantTypeWithAggregatesFilter>;
export const EnumGrantTypeWithAggregatesFilterObjectZodSchema = makeSchema();
