import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { VoteOptionUncheckedUpdateManyWithoutVoteNestedInputObjectSchema as VoteOptionUncheckedUpdateManyWithoutVoteNestedInputObjectSchema } from './VoteOptionUncheckedUpdateManyWithoutVoteNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdById: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  voteOptions: z.lazy(() => VoteOptionUncheckedUpdateManyWithoutVoteNestedInputObjectSchema).optional()
}).strict();
export const VoteUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.VoteUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUncheckedUpdateInput>;
export const VoteUncheckedUpdateInputObjectZodSchema = makeSchema();
