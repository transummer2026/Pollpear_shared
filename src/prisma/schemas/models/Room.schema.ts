import * as z from 'zod';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';

export const RoomSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  bannerUrl: z.string().default("/uploads/banners/default.svg"),
  endsAt: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
  visibility: VisibilitySchema.default("public"),
  status: RoomStatusSchema,
  createdById: z.number().int(),
});

export type RoomType = z.infer<typeof RoomSchema>;
