import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  userAId: z.number().int(),
  userBId: z.number().int()
}).strict();
export const FriendshipUserAIdUserBIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.FriendshipUserAIdUserBIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUserAIdUserBIdCompoundUniqueInput>;
export const FriendshipUserAIdUserBIdCompoundUniqueInputObjectZodSchema = makeSchema();
