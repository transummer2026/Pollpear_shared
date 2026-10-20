import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutMessagesNestedInputObjectSchema as UserUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutMessagesNestedInput.schema';
import { ReportUpdateManyWithoutMessageNestedInputObjectSchema as ReportUpdateManyWithoutMessageNestedInputObjectSchema } from './ReportUpdateManyWithoutMessageNestedInput.schema'

const makeSchema = () => z.object({
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutMessagesNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUpdateManyWithoutMessageNestedInputObjectSchema).optional()
}).strict();
export const MessageUpdateWithoutRoomInputObjectSchema: z.ZodType<Prisma.MessageUpdateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateWithoutRoomInput>;
export const MessageUpdateWithoutRoomInputObjectZodSchema = makeSchema();
