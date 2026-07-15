import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutVotesInputObjectSchema as UserCreateNestedOneWithoutVotesInputObjectSchema } from './UserCreateNestedOneWithoutVotesInput.schema';
import { VoteOptionCreateNestedManyWithoutVoteInputObjectSchema as VoteOptionCreateNestedManyWithoutVoteInputObjectSchema } from './VoteOptionCreateNestedManyWithoutVoteInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutVotesInputObjectSchema),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutVoteInputObjectSchema).optional()
}).strict();
export const VoteCreateInputObjectSchema: z.ZodType<Prisma.VoteCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateInput>;
export const VoteCreateInputObjectZodSchema = makeSchema();
