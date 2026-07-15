import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagCountOutputTypeCountPollHashtagsArgsObjectSchema as HashtagCountOutputTypeCountPollHashtagsArgsObjectSchema } from './HashtagCountOutputTypeCountPollHashtagsArgs.schema';
import { HashtagCountOutputTypeCountReportsArgsObjectSchema as HashtagCountOutputTypeCountReportsArgsObjectSchema } from './HashtagCountOutputTypeCountReportsArgs.schema'

const makeSchema = () => z.object({
  pollHashtags: z.union([z.boolean(), z.lazy(() => HashtagCountOutputTypeCountPollHashtagsArgsObjectSchema)]).optional(),
  reports: z.union([z.boolean(), z.lazy(() => HashtagCountOutputTypeCountReportsArgsObjectSchema)]).optional()
}).strict();
export const HashtagCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.HashtagCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCountOutputTypeSelect>;
export const HashtagCountOutputTypeSelectObjectZodSchema = makeSchema();
