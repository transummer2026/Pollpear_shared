import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutMessagesNestedInputObjectSchema as UserUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutMessagesNestedInput.schema';
import { RoomUpdateOneRequiredWithoutMessagesNestedInputObjectSchema as RoomUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './RoomUpdateOneRequiredWithoutMessagesNestedInput.schema'

const makeSchema = () => z.object({
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutMessagesNestedInputObjectSchema).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutMessagesNestedInputObjectSchema).optional()
}).strict();
export const MessageUpdateWithoutReportsInputObjectSchema: z.ZodType<Prisma.MessageUpdateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateWithoutReportsInput>;
export const MessageUpdateWithoutReportsInputObjectZodSchema = makeSchema();
