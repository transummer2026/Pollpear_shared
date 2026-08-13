import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './VoteWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteWhereInputObjectSchema).optional()
}).strict();
export const PollCountOutputTypeCountVotesArgsObjectSchema = makeSchema();
export const PollCountOutputTypeCountVotesArgsObjectZodSchema = makeSchema();
