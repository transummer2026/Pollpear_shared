import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  voteId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const VoteOptionUncheckedUpdateWithoutOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionUncheckedUpdateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUncheckedUpdateWithoutOptionInput>;
export const VoteOptionUncheckedUpdateWithoutOptionInputObjectZodSchema = makeSchema();
