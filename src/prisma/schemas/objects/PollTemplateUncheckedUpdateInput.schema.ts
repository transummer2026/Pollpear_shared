import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  pollId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PollTemplateUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.PollTemplateUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUncheckedUpdateInput>;
export const PollTemplateUncheckedUpdateInputObjectZodSchema = makeSchema();
