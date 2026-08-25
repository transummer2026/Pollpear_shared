import * as z from 'zod';
export const FriendshipUpsertResultSchema = z.object({
  id: z.number().int(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  userAId: z.number().int(),
  userBId: z.number().int(),
  addresseeId: z.number().int(),
  userA: z.unknown(),
  userB: z.unknown()
});