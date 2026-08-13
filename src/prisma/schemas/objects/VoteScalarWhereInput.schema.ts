import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const votescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VoteScalarWhereInputObjectSchema), z.lazy(() => VoteScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VoteScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VoteScalarWhereInputObjectSchema), z.lazy(() => VoteScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdById: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  pollId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const VoteScalarWhereInputObjectSchema: z.ZodType<Prisma.VoteScalarWhereInput> = votescalarwhereinputSchema as unknown as z.ZodType<Prisma.VoteScalarWhereInput>;
export const VoteScalarWhereInputObjectZodSchema = votescalarwhereinputSchema;
