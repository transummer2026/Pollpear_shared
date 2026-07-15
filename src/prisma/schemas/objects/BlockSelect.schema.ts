import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  blockerId: z.boolean().optional(),
  blockedId: z.boolean().optional(),
  blocker: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  blocked: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const BlockSelectObjectSchema: z.ZodType<Prisma.BlockSelect> = makeSchema() as unknown as z.ZodType<Prisma.BlockSelect>;
export const BlockSelectObjectZodSchema = makeSchema();
