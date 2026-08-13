import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { PollHashtagUpdateManyWithoutHashtagNestedInputObjectSchema as PollHashtagUpdateManyWithoutHashtagNestedInputObjectSchema } from './PollHashtagUpdateManyWithoutHashtagNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pollHashtags: z.lazy(() => PollHashtagUpdateManyWithoutHashtagNestedInputObjectSchema).optional()
}).strict();
export const HashtagUpdateWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagUpdateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUpdateWithoutReportsInput>;
export const HashtagUpdateWithoutReportsInputObjectZodSchema = makeSchema();
