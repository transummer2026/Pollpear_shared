import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagCountOutputTypeSelectObjectSchema as HashtagCountOutputTypeSelectObjectSchema } from './HashtagCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => HashtagCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const HashtagCountOutputTypeArgsObjectSchema = makeSchema();
export const HashtagCountOutputTypeArgsObjectZodSchema = makeSchema();
