import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCountOutputTypeSelectObjectSchema as VoteCountOutputTypeSelectObjectSchema } from './VoteCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VoteCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const VoteCountOutputTypeArgsObjectSchema = makeSchema();
export const VoteCountOutputTypeArgsObjectZodSchema = makeSchema();
