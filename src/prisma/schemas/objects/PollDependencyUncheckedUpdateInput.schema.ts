import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  childPollId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  optionId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PollDependencyUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedUpdateInput>;
export const PollDependencyUncheckedUpdateInputObjectZodSchema = makeSchema();
