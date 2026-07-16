import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagSelectObjectSchema as HashtagSelectObjectSchema } from './HashtagSelect.schema';
import { HashtagIncludeObjectSchema as HashtagIncludeObjectSchema } from './HashtagInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => HashtagSelectObjectSchema).optional(),
  include: z.lazy(() => HashtagIncludeObjectSchema).optional()
}).strict();
export const HashtagArgsObjectSchema = makeSchema();
export const HashtagArgsObjectZodSchema = makeSchema();
