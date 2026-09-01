import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema';
import { VoteOptionFindManySchema as VoteOptionFindManySchema } from '../findManyVoteOption.schema';
import { OptionCountOutputTypeArgsObjectSchema as OptionCountOutputTypeArgsObjectSchema } from './OptionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  sliderLeftLabel: z.boolean().optional(),
  sliderRightLabel: z.boolean().optional(),
  order: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  pollId: z.boolean().optional(),
  poll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional(),
  voteOptions: z.union([z.boolean(), z.lazy(() => VoteOptionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OptionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OptionSelectObjectSchema: z.ZodType<Prisma.OptionSelect> = makeSchema() as unknown as z.ZodType<Prisma.OptionSelect>;
export const OptionSelectObjectZodSchema = makeSchema();
