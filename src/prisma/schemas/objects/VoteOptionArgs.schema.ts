import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionSelectObjectSchema as VoteOptionSelectObjectSchema } from './VoteOptionSelect.schema';
import { VoteOptionIncludeObjectSchema as VoteOptionIncludeObjectSchema } from './VoteOptionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VoteOptionSelectObjectSchema).optional(),
  include: z.lazy(() => VoteOptionIncludeObjectSchema).optional()
}).strict();
export const VoteOptionArgsObjectSchema = makeSchema();
export const VoteOptionArgsObjectZodSchema = makeSchema();
