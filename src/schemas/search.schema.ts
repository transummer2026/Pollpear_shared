import { z } from "zod";
import { UserSchema } from "../prisma/schemas/models/User.schema";
import { PollSchema } from "../prisma/schemas/models/Poll.schema";
import { RoomSchema } from "../prisma/schemas/models/Room.schema";

export const SEARCH_MODELS = ["user", "poll", "room"] as const;
export const SearchModelSchema = z.enum(SEARCH_MODELS);
export const SearchScopeSchema = z.union([SearchModelSchema, z.literal("all")]);

export const SearchQuerySchema = z.object({
  q: z.string().min(2).max(255),
  type: SearchScopeSchema,
});

export const UserSearchResultSchema = UserSchema.pick({
  id: true,
  username: true,
  name: true,
  surname: true,
  avatarUrl: true,
});

export const PollSearchResultSchema = PollSchema.pick({
  id: true,
  title: true,
});

export const RoomSearchResultSchema = RoomSchema.pick({
  id: true,
  name: true,
});

export const SearchResultsSchema = z.object({
  users: z.array(UserSearchResultSchema),
  polls: z.array(PollSearchResultSchema),
  rooms: z.array(RoomSearchResultSchema),
});

export type SearchModel = z.infer<typeof SearchModelSchema>;
export type SearchScope = z.infer<typeof SearchScopeSchema>;
export type SearchQueryDTO = z.infer<typeof SearchQuerySchema>;
export type UserSearchResultDTO = z.infer<typeof UserSearchResultSchema>;
export type PollSearchResultDTO = z.infer<typeof PollSearchResultSchema>;
export type RoomSearchResultDTO = z.infer<typeof RoomSearchResultSchema>;
export type SearchResultsDTO = z.infer<typeof SearchResultsSchema>;
