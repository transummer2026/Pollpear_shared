import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema';
import { VoteOptionFindManySchema as VoteOptionFindManySchema } from '../findManyVoteOption.schema';
import { PollDependencyFindManySchema as PollDependencyFindManySchema } from '../findManyPollDependency.schema';
import { ReportFindManySchema as ReportFindManySchema } from '../findManyReport.schema';
import { OptionCountOutputTypeArgsObjectSchema as OptionCountOutputTypeArgsObjectSchema } from './OptionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  poll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional(),
  voteOptions: z.union([z.boolean(), z.lazy(() => VoteOptionFindManySchema)]).optional(),
  pollDependencies: z.union([z.boolean(), z.lazy(() => PollDependencyFindManySchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OptionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OptionIncludeObjectSchema: z.ZodType<Prisma.OptionInclude> = makeSchema() as unknown as z.ZodType<Prisma.OptionInclude>;
export const OptionIncludeObjectZodSchema = makeSchema();
