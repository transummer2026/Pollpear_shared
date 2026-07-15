import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema';
import { HashtagArgsObjectSchema as HashtagArgsObjectSchema } from './HashtagArgs.schema'

const makeSchema = () => z.object({
  pollId: z.boolean().optional(),
  hashtagId: z.boolean().optional(),
  poll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional(),
  hashtag: z.union([z.boolean(), z.lazy(() => HashtagArgsObjectSchema)]).optional()
}).strict();
export const PollHashtagSelectObjectSchema: z.ZodType<Prisma.PollHashtagSelect> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagSelect>;
export const PollHashtagSelectObjectZodSchema = makeSchema();
