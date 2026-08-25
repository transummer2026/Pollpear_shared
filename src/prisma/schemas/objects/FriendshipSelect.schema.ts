import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  requesterId: z.boolean().optional(),
  addresseeId: z.boolean().optional(),
  requester: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  addressee: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const FriendshipSelectObjectSchema: z.ZodType<Prisma.FriendshipSelect> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipSelect>;
export const FriendshipSelectObjectZodSchema = makeSchema();
