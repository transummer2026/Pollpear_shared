import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumReportReasonFilterObjectSchema as EnumReportReasonFilterObjectSchema } from './EnumReportReasonFilter.schema';
import { ReportReasonSchema } from '../enums/ReportReason.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const reportwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportWhereInputObjectSchema), z.lazy(() => ReportWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => EnumReportReasonFilterObjectSchema), ReportReasonSchema]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  reporterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reportedId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  roomId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  messageId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  pollId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  optionId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  hashtagId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const ReportWhereInputObjectSchema: z.ZodType<Prisma.ReportWhereInput> = reportwhereinputSchema as unknown as z.ZodType<Prisma.ReportWhereInput>;
export const ReportWhereInputObjectZodSchema = reportwhereinputSchema;
