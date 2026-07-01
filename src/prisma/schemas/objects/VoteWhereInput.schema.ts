import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const votewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VoteWhereInputObjectSchema), z.lazy(() => VoteWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VoteWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VoteWhereInputObjectSchema), z.lazy(() => VoteWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  createdById: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const VoteWhereInputObjectSchema: z.ZodType<Prisma.VoteWhereInput> = votewhereinputSchema as unknown as z.ZodType<Prisma.VoteWhereInput>;
export const VoteWhereInputObjectZodSchema = votewhereinputSchema;
