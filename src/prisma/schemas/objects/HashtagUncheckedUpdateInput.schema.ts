import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema as PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema } from './PollHashtagUncheckedUpdateManyWithoutHashtagNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pollHashtags: z.lazy(() => PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema).optional()
}).strict();
export const HashtagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.HashtagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUncheckedUpdateInput>;
export const HashtagUncheckedUpdateInputObjectZodSchema = makeSchema();
