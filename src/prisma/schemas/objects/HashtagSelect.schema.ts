import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagFindManySchema as PollHashtagFindManySchema } from '../findManyPollHashtag.schema';
import { ReportFindManySchema as ReportFindManySchema } from '../findManyReport.schema';
import { HashtagCountOutputTypeArgsObjectSchema as HashtagCountOutputTypeArgsObjectSchema } from './HashtagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  isVisible: z.boolean().optional(),
  pollHashtags: z.union([z.boolean(), z.lazy(() => PollHashtagFindManySchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => HashtagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const HashtagSelectObjectSchema: z.ZodType<Prisma.HashtagSelect> = makeSchema() as unknown as z.ZodType<Prisma.HashtagSelect>;
export const HashtagSelectObjectZodSchema = makeSchema();
