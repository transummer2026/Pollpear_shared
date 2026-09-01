import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagFindManySchema as PollHashtagFindManySchema } from '../findManyPollHashtag.schema';
import { HashtagCountOutputTypeArgsObjectSchema as HashtagCountOutputTypeArgsObjectSchema } from './HashtagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  pollHashtags: z.union([z.boolean(), z.lazy(() => PollHashtagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => HashtagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const HashtagSelectObjectSchema: z.ZodType<Prisma.HashtagSelect> = makeSchema() as unknown as z.ZodType<Prisma.HashtagSelect>;
export const HashtagSelectObjectZodSchema = makeSchema();
