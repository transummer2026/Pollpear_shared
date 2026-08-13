import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionUncheckedCreateNestedManyWithoutVoteInputObjectSchema as VoteOptionUncheckedCreateNestedManyWithoutVoteInputObjectSchema } from './VoteOptionUncheckedCreateNestedManyWithoutVoteInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  freeField: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  pollId: z.number().int(),
  voteOptions: z.lazy(() => VoteOptionUncheckedCreateNestedManyWithoutVoteInputObjectSchema).optional()
}).strict();
export const VoteUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.VoteUncheckedCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUncheckedCreateWithoutCreatedByInput>;
export const VoteUncheckedCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
