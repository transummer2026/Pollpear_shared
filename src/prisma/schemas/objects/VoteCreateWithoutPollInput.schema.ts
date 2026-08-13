import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateNestedManyWithoutVoteInputObjectSchema as VoteOptionCreateNestedManyWithoutVoteInputObjectSchema } from './VoteOptionCreateNestedManyWithoutVoteInput.schema';
import { UserCreateNestedOneWithoutVotesInputObjectSchema as UserCreateNestedOneWithoutVotesInputObjectSchema } from './UserCreateNestedOneWithoutVotesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutVoteInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutVotesInputObjectSchema)
}).strict();
export const VoteCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.VoteCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateWithoutPollInput>;
export const VoteCreateWithoutPollInputObjectZodSchema = makeSchema();
