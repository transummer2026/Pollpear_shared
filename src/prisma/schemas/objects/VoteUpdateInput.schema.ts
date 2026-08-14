import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema as PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutVotesNestedInput.schema';
import { UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema as UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutVotesNestedInput.schema';
import { VoteOptionUpdateManyWithoutVoteNestedInputObjectSchema as VoteOptionUpdateManyWithoutVoteNestedInputObjectSchema } from './VoteOptionUpdateManyWithoutVoteNestedInput.schema'

const makeSchema = () => z.object({
  freeField: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  poll: z.lazy(() => PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema).optional(),
  voteOptions: z.lazy(() => VoteOptionUpdateManyWithoutVoteNestedInputObjectSchema).optional()
}).strict();
export const VoteUpdateInputObjectSchema: z.ZodType<Prisma.VoteUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateInput>;
export const VoteUpdateInputObjectZodSchema = makeSchema();
