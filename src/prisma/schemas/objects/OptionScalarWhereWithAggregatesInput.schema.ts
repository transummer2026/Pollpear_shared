import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const optionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OptionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OptionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OptionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  sliderLeftLabel: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  sliderRightLabel: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  pollId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const OptionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OptionScalarWhereWithAggregatesInput> = optionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.OptionScalarWhereWithAggregatesInput>;
export const OptionScalarWhereWithAggregatesInputObjectZodSchema = optionscalarwherewithaggregatesinputSchema;
