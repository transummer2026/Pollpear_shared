import * as z from "zod";

export const FriendshipStatusSchema = z.enum([
  "pending",
  "accepted",
  "rejected",
]);

export type FriendshipStatus = z.infer<typeof FriendshipStatusSchema>;
