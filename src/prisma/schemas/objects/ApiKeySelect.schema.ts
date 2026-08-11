import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  keyHash: z.boolean().optional(),
  appName: z.boolean().optional(),
  revoked: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const ApiKeySelectObjectSchema: z.ZodType<Prisma.ApiKeySelect> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeySelect>;
export const ApiKeySelectObjectZodSchema = makeSchema();
