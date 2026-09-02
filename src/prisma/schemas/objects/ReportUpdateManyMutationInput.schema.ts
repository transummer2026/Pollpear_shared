import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportReasonSchema } from '../enums/ReportReason.schema';
import { EnumReportReasonFieldUpdateOperationsInputObjectSchema as EnumReportReasonFieldUpdateOperationsInputObjectSchema } from './EnumReportReasonFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  reason: z.union([ReportReasonSchema, z.lazy(() => EnumReportReasonFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ReportUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyMutationInput>;
export const ReportUpdateManyMutationInputObjectZodSchema = makeSchema();
