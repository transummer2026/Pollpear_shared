import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagWhereInputObjectSchema as PollHashtagWhereInputObjectSchema } from './PollHashtagWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollHashtagWhereInputObjectSchema).optional()
}).strict();
export const HashtagCountOutputTypeCountPollHashtagsArgsObjectSchema = makeSchema();
export const HashtagCountOutputTypeCountPollHashtagsArgsObjectZodSchema = makeSchema();
