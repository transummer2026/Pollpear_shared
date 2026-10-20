import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BanSelectObjectSchema as BanSelectObjectSchema } from './BanSelect.schema';
import { BanIncludeObjectSchema as BanIncludeObjectSchema } from './BanInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BanSelectObjectSchema).optional(),
  include: z.lazy(() => BanIncludeObjectSchema).optional()
}).strict();
export const BanArgsObjectSchema = makeSchema();
export const BanArgsObjectZodSchema = makeSchema();
