import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagFindManySchema as PollHashtagFindManySchema } from '../findManyPollHashtag.schema';
import { HashtagCountOutputTypeArgsObjectSchema as HashtagCountOutputTypeArgsObjectSchema } from './HashtagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  pollHashtags: z.union([z.boolean(), z.lazy(() => PollHashtagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => HashtagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const HashtagIncludeObjectSchema: z.ZodType<Prisma.HashtagInclude> = makeSchema() as unknown as z.ZodType<Prisma.HashtagInclude>;
export const HashtagIncludeObjectZodSchema = makeSchema();
