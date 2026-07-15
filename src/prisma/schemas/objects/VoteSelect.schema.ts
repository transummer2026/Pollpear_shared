import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { VoteOptionFindManySchema as VoteOptionFindManySchema } from '../findManyVoteOption.schema';
import { VoteCountOutputTypeArgsObjectSchema as VoteCountOutputTypeArgsObjectSchema } from './VoteCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  label: z.boolean().optional(),
  createdById: z.boolean().optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  voteOptions: z.union([z.boolean(), z.lazy(() => VoteOptionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VoteCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VoteSelectObjectSchema: z.ZodType<Prisma.VoteSelect> = makeSchema() as unknown as z.ZodType<Prisma.VoteSelect>;
export const VoteSelectObjectZodSchema = makeSchema();
