import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipUserAIdUserBIdCompoundUniqueInputObjectSchema as FriendshipUserAIdUserBIdCompoundUniqueInputObjectSchema } from './FriendshipUserAIdUserBIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userAId_userBId: z.lazy(() => FriendshipUserAIdUserBIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const FriendshipWhereUniqueInputObjectSchema: z.ZodType<Prisma.FriendshipWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipWhereUniqueInput>;
export const FriendshipWhereUniqueInputObjectZodSchema = makeSchema();
