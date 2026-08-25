import * as z from 'zod';
export const FriendshipFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  requesterId: z.number().int(),
  addresseeId: z.number().int(),
  requester: z.unknown(),
  addressee: z.unknown()
}));