import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  optionId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const PollDependencyUncheckedUpdateWithoutChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedUpdateWithoutChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedUpdateWithoutChildPollInput>;
export const PollDependencyUncheckedUpdateWithoutChildPollInputObjectZodSchema = makeSchema();
