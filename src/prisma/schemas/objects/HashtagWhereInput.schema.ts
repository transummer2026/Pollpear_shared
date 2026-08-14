import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PollHashtagListRelationFilterObjectSchema as PollHashtagListRelationFilterObjectSchema } from './PollHashtagListRelationFilter.schema';
import { ReportListRelationFilterObjectSchema as ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema'

const hashtagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => HashtagWhereInputObjectSchema), z.lazy(() => HashtagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HashtagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HashtagWhereInputObjectSchema), z.lazy(() => HashtagWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  pollHashtags: z.lazy(() => PollHashtagListRelationFilterObjectSchema).optional(),
  reports: z.lazy(() => ReportListRelationFilterObjectSchema).optional()
}).strict();
export const HashtagWhereInputObjectSchema: z.ZodType<Prisma.HashtagWhereInput> = hashtagwhereinputSchema as unknown as z.ZodType<Prisma.HashtagWhereInput>;
export const HashtagWhereInputObjectZodSchema = hashtagwhereinputSchema;
