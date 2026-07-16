import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PollHashtagUpdateManyWithoutHashtagNestedInputObjectSchema as PollHashtagUpdateManyWithoutHashtagNestedInputObjectSchema } from './PollHashtagUpdateManyWithoutHashtagNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isVisible: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  pollHashtags: z.lazy(() => PollHashtagUpdateManyWithoutHashtagNestedInputObjectSchema).optional()
}).strict();
export const HashtagUpdateWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagUpdateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUpdateWithoutReportsInput>;
export const HashtagUpdateWithoutReportsInputObjectZodSchema = makeSchema();
