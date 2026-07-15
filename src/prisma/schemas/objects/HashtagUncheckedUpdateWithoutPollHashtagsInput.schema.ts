import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ReportUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema as ReportUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutHashtagNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isVisible: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  reports: z.lazy(() => ReportUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema).optional()
}).strict();
export const HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.HashtagUncheckedUpdateWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUncheckedUpdateWithoutPollHashtagsInput>;
export const HashtagUncheckedUpdateWithoutPollHashtagsInputObjectZodSchema = makeSchema();
