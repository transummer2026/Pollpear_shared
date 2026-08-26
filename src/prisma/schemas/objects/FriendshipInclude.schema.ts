import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  userA: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userB: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const FriendshipIncludeObjectSchema: z.ZodType<Prisma.FriendshipInclude> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipInclude>;
export const FriendshipIncludeObjectZodSchema = makeSchema();
