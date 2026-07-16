import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema as PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema } from './PollHashtagUncheckedUpdateManyWithoutHashtagNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema as ReportUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutHashtagNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isVisible: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  pollHashtags: z.lazy(() => PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema).optional()
}).strict();
export const HashtagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.HashtagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUncheckedUpdateInput>;
export const HashtagUncheckedUpdateInputObjectZodSchema = makeSchema();
