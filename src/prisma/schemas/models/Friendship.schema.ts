import * as z from 'zod';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';

export const FriendshipSchema = z.object({
  id: z.number().int(),
  status: FriendshipStatusSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
  requesterId: z.number().int(),
  addresseeId: z.number().int(),
});

export type FriendshipType = z.infer<typeof FriendshipSchema>;
