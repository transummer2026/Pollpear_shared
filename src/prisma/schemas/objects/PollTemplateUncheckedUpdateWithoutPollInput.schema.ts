import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PollTemplateUncheckedUpdateWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateUncheckedUpdateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUncheckedUpdateWithoutPollInput>;
export const PollTemplateUncheckedUpdateWithoutPollInputObjectZodSchema = makeSchema();
