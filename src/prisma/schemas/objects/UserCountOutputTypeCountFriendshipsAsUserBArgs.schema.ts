import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipWhereInputObjectSchema as FriendshipWhereInputObjectSchema } from './FriendshipWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountFriendshipsAsUserBArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountFriendshipsAsUserBArgsObjectZodSchema = makeSchema();
