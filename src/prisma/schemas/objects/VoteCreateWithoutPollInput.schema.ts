import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutVotesInputObjectSchema as UserCreateNestedOneWithoutVotesInputObjectSchema } from './UserCreateNestedOneWithoutVotesInput.schema';
import { VoteOptionCreateNestedManyWithoutVoteInputObjectSchema as VoteOptionCreateNestedManyWithoutVoteInputObjectSchema } from './VoteOptionCreateNestedManyWithoutVoteInput.schema'

const makeSchema = () => z.object({
  freeField: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutVotesInputObjectSchema),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutVoteInputObjectSchema).optional()
}).strict();
export const VoteCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.VoteCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateWithoutPollInput>;
export const VoteCreateWithoutPollInputObjectZodSchema = makeSchema();
