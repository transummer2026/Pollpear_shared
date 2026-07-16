import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockSelectObjectSchema as BlockSelectObjectSchema } from './BlockSelect.schema';
import { BlockIncludeObjectSchema as BlockIncludeObjectSchema } from './BlockInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BlockSelectObjectSchema).optional(),
  include: z.lazy(() => BlockIncludeObjectSchema).optional()
}).strict();
export const BlockArgsObjectSchema = makeSchema();
export const BlockArgsObjectZodSchema = makeSchema();
