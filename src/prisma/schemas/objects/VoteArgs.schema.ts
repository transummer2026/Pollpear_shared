import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteSelectObjectSchema as VoteSelectObjectSchema } from './VoteSelect.schema';
import { VoteIncludeObjectSchema as VoteIncludeObjectSchema } from './VoteInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VoteSelectObjectSchema).optional(),
  include: z.lazy(() => VoteIncludeObjectSchema).optional()
}).strict();
export const VoteArgsObjectSchema = makeSchema();
export const VoteArgsObjectZodSchema = makeSchema();
