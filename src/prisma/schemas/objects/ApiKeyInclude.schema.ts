import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ApiKeyIncludeObjectSchema: z.ZodType<Prisma.ApiKeyInclude> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyInclude>;
export const ApiKeyIncludeObjectZodSchema = makeSchema();
