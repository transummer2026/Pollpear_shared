import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema';
import { VoteOptionFindManySchema as VoteOptionFindManySchema } from '../findManyVoteOption.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { VoteCountOutputTypeArgsObjectSchema as VoteCountOutputTypeArgsObjectSchema } from './VoteCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  label: z.boolean().optional(),
  createdById: z.boolean().optional(),
  pollId: z.boolean().optional(),
  poll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional(),
  voteOptions: z.union([z.boolean(), z.lazy(() => VoteOptionFindManySchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VoteCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VoteSelectObjectSchema: z.ZodType<Prisma.VoteSelect> = makeSchema() as unknown as z.ZodType<Prisma.VoteSelect>;
export const VoteSelectObjectZodSchema = makeSchema();
