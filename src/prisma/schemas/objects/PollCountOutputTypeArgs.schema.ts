import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCountOutputTypeSelectObjectSchema as PollCountOutputTypeSelectObjectSchema } from './PollCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PollCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const PollCountOutputTypeArgsObjectSchema = makeSchema();
export const PollCountOutputTypeArgsObjectZodSchema = makeSchema();
