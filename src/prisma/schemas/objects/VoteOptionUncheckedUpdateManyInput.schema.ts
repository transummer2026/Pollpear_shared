import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  voteId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  optionId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const VoteOptionUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.VoteOptionUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUncheckedUpdateManyInput>;
export const VoteOptionUncheckedUpdateManyInputObjectZodSchema = makeSchema();
