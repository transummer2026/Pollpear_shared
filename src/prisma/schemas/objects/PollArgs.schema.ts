import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollSelectObjectSchema as PollSelectObjectSchema } from './PollSelect.schema';
import { PollIncludeObjectSchema as PollIncludeObjectSchema } from './PollInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PollSelectObjectSchema).optional(),
  include: z.lazy(() => PollIncludeObjectSchema).optional()
}).strict();
export const PollArgsObjectSchema = makeSchema();
export const PollArgsObjectZodSchema = makeSchema();
