import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema as PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutVotesNestedInput.schema';
import { VoteOptionUpdateManyWithoutVoteNestedInputObjectSchema as VoteOptionUpdateManyWithoutVoteNestedInputObjectSchema } from './VoteOptionUpdateManyWithoutVoteNestedInput.schema';
import { UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema as UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutVotesNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  poll: z.lazy(() => PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema).optional(),
  voteOptions: z.lazy(() => VoteOptionUpdateManyWithoutVoteNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema).optional()
}).strict();
export const VoteUpdateInputObjectSchema: z.ZodType<Prisma.VoteUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateInput>;
export const VoteUpdateInputObjectZodSchema = makeSchema();
