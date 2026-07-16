import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportReasonSchema } from '../enums/ReportReason.schema';
import { EnumReportReasonFieldUpdateOperationsInputObjectSchema as EnumReportReasonFieldUpdateOperationsInputObjectSchema } from './EnumReportReasonFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutReportsGivenNestedInputObjectSchema as UserUpdateOneRequiredWithoutReportsGivenNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutReportsGivenNestedInput.schema';
import { UserUpdateOneRequiredWithoutReportsReceivedNestedInputObjectSchema as UserUpdateOneRequiredWithoutReportsReceivedNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutReportsReceivedNestedInput.schema';
import { RoomUpdateOneWithoutReportsNestedInputObjectSchema as RoomUpdateOneWithoutReportsNestedInputObjectSchema } from './RoomUpdateOneWithoutReportsNestedInput.schema';
import { MessageUpdateOneWithoutReportsNestedInputObjectSchema as MessageUpdateOneWithoutReportsNestedInputObjectSchema } from './MessageUpdateOneWithoutReportsNestedInput.schema';
import { PollUpdateOneWithoutReportsNestedInputObjectSchema as PollUpdateOneWithoutReportsNestedInputObjectSchema } from './PollUpdateOneWithoutReportsNestedInput.schema';
import { HashtagUpdateOneWithoutReportsNestedInputObjectSchema as HashtagUpdateOneWithoutReportsNestedInputObjectSchema } from './HashtagUpdateOneWithoutReportsNestedInput.schema'

const makeSchema = () => z.object({
  reason: z.union([ReportReasonSchema, z.lazy(() => EnumReportReasonFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  reporter: z.lazy(() => UserUpdateOneRequiredWithoutReportsGivenNestedInputObjectSchema).optional(),
  reported: z.lazy(() => UserUpdateOneRequiredWithoutReportsReceivedNestedInputObjectSchema).optional(),
  room: z.lazy(() => RoomUpdateOneWithoutReportsNestedInputObjectSchema).optional(),
  message: z.lazy(() => MessageUpdateOneWithoutReportsNestedInputObjectSchema).optional(),
  poll: z.lazy(() => PollUpdateOneWithoutReportsNestedInputObjectSchema).optional(),
  hashtag: z.lazy(() => HashtagUpdateOneWithoutReportsNestedInputObjectSchema).optional()
}).strict();
export const ReportUpdateWithoutOptionInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithoutOptionInput>;
export const ReportUpdateWithoutOptionInputObjectZodSchema = makeSchema();
