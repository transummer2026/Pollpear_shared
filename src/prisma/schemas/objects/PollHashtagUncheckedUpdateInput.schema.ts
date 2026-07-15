import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  pollId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashtagId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PollHashtagUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.PollHashtagUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUncheckedUpdateInput>;
export const PollHashtagUncheckedUpdateInputObjectZodSchema = makeSchema();
