import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutVotesInputObjectSchema as PollCreateNestedOneWithoutVotesInputObjectSchema } from './PollCreateNestedOneWithoutVotesInput.schema';
import { VoteOptionCreateNestedManyWithoutVoteInputObjectSchema as VoteOptionCreateNestedManyWithoutVoteInputObjectSchema } from './VoteOptionCreateNestedManyWithoutVoteInput.schema';
import { UserCreateNestedOneWithoutVotesInputObjectSchema as UserCreateNestedOneWithoutVotesInputObjectSchema } from './UserCreateNestedOneWithoutVotesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  poll: z.lazy(() => PollCreateNestedOneWithoutVotesInputObjectSchema),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutVoteInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutVotesInputObjectSchema)
}).strict();
export const VoteCreateInputObjectSchema: z.ZodType<Prisma.VoteCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateInput>;
export const VoteCreateInputObjectZodSchema = makeSchema();
