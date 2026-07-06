import * as z from "zod";
import { RoomStatusSchema } from "../enums/RoomStatus.schema";
import { VisibilitySchema } from "../enums/Visibility.schema";

export const RoomSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  publishedAt: z.date().nullish(),
  bannerUrl: z.string(),
  visibility: VisibilitySchema,
  status: RoomStatusSchema,
  createdById: z.number().int(),
});

export type RoomType = z.infer<typeof RoomSchema>;
