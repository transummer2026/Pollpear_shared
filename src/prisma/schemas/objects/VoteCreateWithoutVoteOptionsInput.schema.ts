import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutVotesInputObjectSchema as PollCreateNestedOneWithoutVotesInputObjectSchema } from './PollCreateNestedOneWithoutVotesInput.schema';
import { UserCreateNestedOneWithoutVotesInputObjectSchema as UserCreateNestedOneWithoutVotesInputObjectSchema } from './UserCreateNestedOneWithoutVotesInput.schema'

const makeSchema = () => z.object({
  freeField: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  poll: z.lazy(() => PollCreateNestedOneWithoutVotesInputObjectSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutVotesInputObjectSchema)
}).strict();
export const VoteCreateWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.VoteCreateWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateWithoutVoteOptionsInput>;
export const VoteCreateWithoutVoteOptionsInputObjectZodSchema = makeSchema();
