import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const OauthIncludeObjectSchema: z.ZodType<Prisma.OauthInclude> = makeSchema() as unknown as z.ZodType<Prisma.OauthInclude>;
export const OauthIncludeObjectZodSchema = makeSchema();
