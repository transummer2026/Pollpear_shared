import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateSelectObjectSchema as PollTemplateSelectObjectSchema } from './PollTemplateSelect.schema';
import { PollTemplateIncludeObjectSchema as PollTemplateIncludeObjectSchema } from './PollTemplateInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PollTemplateSelectObjectSchema).optional(),
  include: z.lazy(() => PollTemplateIncludeObjectSchema).optional()
}).strict();
export const PollTemplateArgsObjectSchema = makeSchema();
export const PollTemplateArgsObjectZodSchema = makeSchema();
