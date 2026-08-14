import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { VoteOptionFindManySchema as VoteOptionFindManySchema } from '../findManyVoteOption.schema';
import { VoteCountOutputTypeArgsObjectSchema as VoteCountOutputTypeArgsObjectSchema } from './VoteCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  poll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  voteOptions: z.union([z.boolean(), z.lazy(() => VoteOptionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VoteCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VoteIncludeObjectSchema: z.ZodType<Prisma.VoteInclude> = makeSchema() as unknown as z.ZodType<Prisma.VoteInclude>;
export const VoteIncludeObjectZodSchema = makeSchema();
