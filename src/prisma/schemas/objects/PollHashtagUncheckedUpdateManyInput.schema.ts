import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  pollId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  hashtagId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PollHashtagUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.PollHashtagUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUncheckedUpdateManyInput>;
export const PollHashtagUncheckedUpdateManyInputObjectZodSchema = makeSchema();
