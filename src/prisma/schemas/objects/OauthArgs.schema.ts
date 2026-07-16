import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OauthSelectObjectSchema as OauthSelectObjectSchema } from './OauthSelect.schema';
import { OauthIncludeObjectSchema as OauthIncludeObjectSchema } from './OauthInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OauthSelectObjectSchema).optional(),
  include: z.lazy(() => OauthIncludeObjectSchema).optional()
}).strict();
export const OauthArgsObjectSchema = makeSchema();
export const OauthArgsObjectZodSchema = makeSchema();
