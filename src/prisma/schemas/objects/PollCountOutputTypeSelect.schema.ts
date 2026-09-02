import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCountOutputTypeCountVotesArgsObjectSchema as PollCountOutputTypeCountVotesArgsObjectSchema } from './PollCountOutputTypeCountVotesArgs.schema';
import { PollCountOutputTypeCountOptionsArgsObjectSchema as PollCountOutputTypeCountOptionsArgsObjectSchema } from './PollCountOutputTypeCountOptionsArgs.schema';
import { PollCountOutputTypeCountPollHashtagsArgsObjectSchema as PollCountOutputTypeCountPollHashtagsArgsObjectSchema } from './PollCountOutputTypeCountPollHashtagsArgs.schema';
import { PollCountOutputTypeCountPollTemplatesArgsObjectSchema as PollCountOutputTypeCountPollTemplatesArgsObjectSchema } from './PollCountOutputTypeCountPollTemplatesArgs.schema';
import { PollCountOutputTypeCountReportsArgsObjectSchema as PollCountOutputTypeCountReportsArgsObjectSchema } from './PollCountOutputTypeCountReportsArgs.schema';
import { PollCountOutputTypeCountChildDependenciesArgsObjectSchema as PollCountOutputTypeCountChildDependenciesArgsObjectSchema } from './PollCountOutputTypeCountChildDependenciesArgs.schema'

const makeSchema = () => z.object({
  votes: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeCountVotesArgsObjectSchema)]).optional(),
  options: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeCountOptionsArgsObjectSchema)]).optional(),
  pollHashtags: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeCountPollHashtagsArgsObjectSchema)]).optional(),
  pollTemplates: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeCountPollTemplatesArgsObjectSchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeCountReportsArgsObjectSchema)]).optional(),
  childDependencies: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeCountChildDependenciesArgsObjectSchema)]).optional()
}).strict();
export const PollCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PollCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PollCountOutputTypeSelect>;
export const PollCountOutputTypeSelectObjectZodSchema = makeSchema();
