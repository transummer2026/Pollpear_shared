import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PollTemplateUncheckedUpdateManyWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateUncheckedUpdateManyWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUncheckedUpdateManyWithoutPollInput>;
export const PollTemplateUncheckedUpdateManyWithoutPollInputObjectZodSchema = makeSchema();
