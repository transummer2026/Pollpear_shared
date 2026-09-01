import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCountOutputTypeCountVotesArgsObjectSchema as PollCountOutputTypeCountVotesArgsObjectSchema } from './PollCountOutputTypeCountVotesArgs.schema';
import { PollCountOutputTypeCountOptionsArgsObjectSchema as PollCountOutputTypeCountOptionsArgsObjectSchema } from './PollCountOutputTypeCountOptionsArgs.schema';
import { PollCountOutputTypeCountPollHashtagsArgsObjectSchema as PollCountOutputTypeCountPollHashtagsArgsObjectSchema } from './PollCountOutputTypeCountPollHashtagsArgs.schema'

const makeSchema = () => z.object({
  votes: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeCountVotesArgsObjectSchema)]).optional(),
  options: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeCountOptionsArgsObjectSchema)]).optional(),
  pollHashtags: z.union([z.boolean(), z.lazy(() => PollCountOutputTypeCountPollHashtagsArgsObjectSchema)]).optional()
}).strict();
export const PollCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PollCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PollCountOutputTypeSelect>;
export const PollCountOutputTypeSelectObjectZodSchema = makeSchema();
