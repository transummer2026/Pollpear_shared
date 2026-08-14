import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionUncheckedCreateNestedManyWithoutVoteInputObjectSchema as VoteOptionUncheckedCreateNestedManyWithoutVoteInputObjectSchema } from './VoteOptionUncheckedCreateNestedManyWithoutVoteInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  freeField: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  createdById: z.number().int(),
  voteOptions: z.lazy(() => VoteOptionUncheckedCreateNestedManyWithoutVoteInputObjectSchema).optional()
}).strict();
export const VoteUncheckedCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.VoteUncheckedCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUncheckedCreateWithoutPollInput>;
export const VoteUncheckedCreateWithoutPollInputObjectZodSchema = makeSchema();
