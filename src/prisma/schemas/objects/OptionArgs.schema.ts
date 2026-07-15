import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionSelectObjectSchema as OptionSelectObjectSchema } from './OptionSelect.schema';
import { OptionIncludeObjectSchema as OptionIncludeObjectSchema } from './OptionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OptionSelectObjectSchema).optional(),
  include: z.lazy(() => OptionIncludeObjectSchema).optional()
}).strict();
export const OptionArgsObjectSchema = makeSchema();
export const OptionArgsObjectZodSchema = makeSchema();
