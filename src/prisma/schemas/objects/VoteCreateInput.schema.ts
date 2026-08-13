import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutVotesInputObjectSchema as PollCreateNestedOneWithoutVotesInputObjectSchema } from './PollCreateNestedOneWithoutVotesInput.schema';
import { UserCreateNestedOneWithoutVotesInputObjectSchema as UserCreateNestedOneWithoutVotesInputObjectSchema } from './UserCreateNestedOneWithoutVotesInput.schema';
import { VoteOptionCreateNestedManyWithoutVoteInputObjectSchema as VoteOptionCreateNestedManyWithoutVoteInputObjectSchema } from './VoteOptionCreateNestedManyWithoutVoteInput.schema'

const makeSchema = () => z.object({
  freeField: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  poll: z.lazy(() => PollCreateNestedOneWithoutVotesInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutVotesInputObjectSchema),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutVoteInputObjectSchema).optional()
}).strict();
export const VoteCreateInputObjectSchema: z.ZodType<Prisma.VoteCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateInput>;
export const VoteCreateInputObjectZodSchema = makeSchema();
