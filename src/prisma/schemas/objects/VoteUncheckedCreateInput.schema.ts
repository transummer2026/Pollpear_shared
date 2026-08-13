import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionUncheckedCreateNestedManyWithoutVoteInputObjectSchema as VoteOptionUncheckedCreateNestedManyWithoutVoteInputObjectSchema } from './VoteOptionUncheckedCreateNestedManyWithoutVoteInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  freeField: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  createdById: z.number().int(),
  pollId: z.number().int(),
  voteOptions: z.lazy(() => VoteOptionUncheckedCreateNestedManyWithoutVoteInputObjectSchema).optional()
}).strict();
export const VoteUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VoteUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUncheckedCreateInput>;
export const VoteUncheckedCreateInputObjectZodSchema = makeSchema();
