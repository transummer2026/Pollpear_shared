import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencySelectObjectSchema as PollDependencySelectObjectSchema } from './PollDependencySelect.schema';
import { PollDependencyIncludeObjectSchema as PollDependencyIncludeObjectSchema } from './PollDependencyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PollDependencySelectObjectSchema).optional(),
  include: z.lazy(() => PollDependencyIncludeObjectSchema).optional()
}).strict();
export const PollDependencyArgsObjectSchema = makeSchema();
export const PollDependencyArgsObjectZodSchema = makeSchema();
