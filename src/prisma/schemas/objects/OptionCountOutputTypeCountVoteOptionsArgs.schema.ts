import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionWhereInputObjectSchema as VoteOptionWhereInputObjectSchema } from './VoteOptionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteOptionWhereInputObjectSchema).optional()
}).strict();
export const OptionCountOutputTypeCountVoteOptionsArgsObjectSchema = makeSchema();
export const OptionCountOutputTypeCountVoteOptionsArgsObjectZodSchema = makeSchema();
