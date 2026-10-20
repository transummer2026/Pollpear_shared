import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  childPollId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PollDependencyUncheckedUpdateWithoutOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedUpdateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedUpdateWithoutOptionInput>;
export const PollDependencyUncheckedUpdateWithoutOptionInputObjectZodSchema = makeSchema();
