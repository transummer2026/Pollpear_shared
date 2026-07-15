import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCountOutputTypeSelectObjectSchema as OptionCountOutputTypeSelectObjectSchema } from './OptionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OptionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const OptionCountOutputTypeArgsObjectSchema = makeSchema();
export const OptionCountOutputTypeArgsObjectZodSchema = makeSchema();
