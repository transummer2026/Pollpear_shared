import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollArgsObjectSchema as PollArgsObjectSchema } from './PollArgs.schema';
import { HashtagArgsObjectSchema as HashtagArgsObjectSchema } from './HashtagArgs.schema'

const makeSchema = () => z.object({
  poll: z.union([z.boolean(), z.lazy(() => PollArgsObjectSchema)]).optional(),
  hashtag: z.union([z.boolean(), z.lazy(() => HashtagArgsObjectSchema)]).optional()
}).strict();
export const PollHashtagIncludeObjectSchema: z.ZodType<Prisma.PollHashtagInclude> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagInclude>;
export const PollHashtagIncludeObjectZodSchema = makeSchema();
