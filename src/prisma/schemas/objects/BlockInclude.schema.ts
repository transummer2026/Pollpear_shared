import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  blocker: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  blocked: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const BlockIncludeObjectSchema: z.ZodType<Prisma.BlockInclude> = makeSchema() as unknown as z.ZodType<Prisma.BlockInclude>;
export const BlockIncludeObjectZodSchema = makeSchema();
