import * as z from "zod";

export const RoomStatusSchema = z.enum([
  "active",
  "draft",
  "locked",
  "archived",
]);

export type RoomStatus = z.infer<typeof RoomStatusSchema>;
