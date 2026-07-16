import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountPollsCreatedArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountPollsCreatedArgsObjectZodSchema = makeSchema();
