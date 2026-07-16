import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutVotesInputObjectSchema as UserCreateNestedOneWithoutVotesInputObjectSchema } from './UserCreateNestedOneWithoutVotesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutVotesInputObjectSchema)
}).strict();
export const VoteCreateWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.VoteCreateWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateWithoutVoteOptionsInput>;
export const VoteCreateWithoutVoteOptionsInputObjectZodSchema = makeSchema();
