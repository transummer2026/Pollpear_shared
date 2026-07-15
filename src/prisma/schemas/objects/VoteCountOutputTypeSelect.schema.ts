import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCountOutputTypeCountVoteOptionsArgsObjectSchema as VoteCountOutputTypeCountVoteOptionsArgsObjectSchema } from './VoteCountOutputTypeCountVoteOptionsArgs.schema'

const makeSchema = () => z.object({
  voteOptions: z.union([z.boolean(), z.lazy(() => VoteCountOutputTypeCountVoteOptionsArgsObjectSchema)]).optional()
}).strict();
export const VoteCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.VoteCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.VoteCountOutputTypeSelect>;
export const VoteCountOutputTypeSelectObjectZodSchema = makeSchema();
