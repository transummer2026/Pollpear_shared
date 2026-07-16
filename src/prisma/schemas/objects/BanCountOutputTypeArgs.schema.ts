import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanCountOutputTypeSelectObjectSchema as BanCountOutputTypeSelectObjectSchema } from './BanCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BanCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const BanCountOutputTypeArgsObjectSchema = makeSchema();
export const BanCountOutputTypeArgsObjectZodSchema = makeSchema();
