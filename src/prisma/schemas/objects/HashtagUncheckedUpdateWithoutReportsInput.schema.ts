import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema as PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema } from './PollHashtagUncheckedUpdateManyWithoutHashtagNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pollHashtags: z.lazy(() => PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema).optional()
}).strict();
export const HashtagUncheckedUpdateWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagUncheckedUpdateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUncheckedUpdateWithoutReportsInput>;
export const HashtagUncheckedUpdateWithoutReportsInputObjectZodSchema = makeSchema();
