import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { VoteOptionUncheckedUpdateManyWithoutVoteNestedInputObjectSchema as VoteOptionUncheckedUpdateManyWithoutVoteNestedInputObjectSchema } from './VoteOptionUncheckedUpdateManyWithoutVoteNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  freeField: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdById: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  voteOptions: z.lazy(() => VoteOptionUncheckedUpdateManyWithoutVoteNestedInputObjectSchema).optional()
}).strict();
export const VoteUncheckedUpdateWithoutPollInputObjectSchema: z.ZodType<Prisma.VoteUncheckedUpdateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUncheckedUpdateWithoutPollInput>;
export const VoteUncheckedUpdateWithoutPollInputObjectZodSchema = makeSchema();
