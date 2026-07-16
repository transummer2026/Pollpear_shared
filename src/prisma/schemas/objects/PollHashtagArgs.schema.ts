import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagSelectObjectSchema as PollHashtagSelectObjectSchema } from './PollHashtagSelect.schema';
import { PollHashtagIncludeObjectSchema as PollHashtagIncludeObjectSchema } from './PollHashtagInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PollHashtagSelectObjectSchema).optional(),
  include: z.lazy(() => PollHashtagIncludeObjectSchema).optional()
}).strict();
export const PollHashtagArgsObjectSchema = makeSchema();
export const PollHashtagArgsObjectZodSchema = makeSchema();
