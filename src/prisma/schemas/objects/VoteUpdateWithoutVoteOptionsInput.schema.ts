import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema as PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutVotesNestedInput.schema';
import { UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema as UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutVotesNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  poll: z.lazy(() => PollUpdateOneRequiredWithoutVotesNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutVotesNestedInputObjectSchema).optional()
}).strict();
export const VoteUpdateWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.VoteUpdateWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateWithoutVoteOptionsInput>;
export const VoteUpdateWithoutVoteOptionsInputObjectZodSchema = makeSchema();
