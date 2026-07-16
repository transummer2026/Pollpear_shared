import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCountOutputTypeCountVoteOptionsArgsObjectSchema as OptionCountOutputTypeCountVoteOptionsArgsObjectSchema } from './OptionCountOutputTypeCountVoteOptionsArgs.schema';
import { OptionCountOutputTypeCountPollDependenciesArgsObjectSchema as OptionCountOutputTypeCountPollDependenciesArgsObjectSchema } from './OptionCountOutputTypeCountPollDependenciesArgs.schema';
import { OptionCountOutputTypeCountReportsArgsObjectSchema as OptionCountOutputTypeCountReportsArgsObjectSchema } from './OptionCountOutputTypeCountReportsArgs.schema'

const makeSchema = () => z.object({
  voteOptions: z.union([z.boolean(), z.lazy(() => OptionCountOutputTypeCountVoteOptionsArgsObjectSchema)]).optional(),
  pollDependencies: z.union([z.boolean(), z.lazy(() => OptionCountOutputTypeCountPollDependenciesArgsObjectSchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => OptionCountOutputTypeCountReportsArgsObjectSchema)]).optional()
}).strict();
export const OptionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OptionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OptionCountOutputTypeSelect>;
export const OptionCountOutputTypeSelectObjectZodSchema = makeSchema();
