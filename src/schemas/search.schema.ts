import { z } from 'zod';
import { UserSchema } from '../prisma/schemas/models/User.schema';
import { RoomSchema } from '../prisma/schemas/models/Room.schema';

export const SEARCH_MODELS = ['user', 'room'] as const;
export const SearchModelSchema = z.enum(SEARCH_MODELS);
export const SearchScopeSchema = z.union([SearchModelSchema, z.literal('all')]);

export const SEARCH_SORT_OPTIONS = ['relevance', 'alphabetical'] as const;
export const SearchSortSchema = z.enum(SEARCH_SORT_OPTIONS);

export const SearchQuerySchema = z.object({
  q: z.string().min(2).max(255),
  type: SearchScopeSchema,
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
  sortBy: SearchSortSchema.default('relevance'),
});

export const UserSearchResultSchema = UserSchema.pick({
  id: true,
  username: true,
  name: true,
  surname: true,
  avatarUrl: true,
});

export const RoomSearchResultSchema = RoomSchema.pick({
  id: true,
  name: true,
});

export const SearchResultsSchema = z.object({
  users: z.array(UserSearchResultSchema),
  usersTotal: z.number().int().min(0).optional(),
  rooms: z.array(RoomSearchResultSchema),
  roomsTotal: z.number().int().min(0).optional(),
});

export type SearchModel = z.infer<typeof SearchModelSchema>;
export type SearchScope = z.infer<typeof SearchScopeSchema>;
export type SearchSort = z.infer<typeof SearchSortSchema>;
export type SearchQueryDTO = z.infer<typeof SearchQuerySchema>;
export type UserSearchResultDTO = z.infer<typeof UserSearchResultSchema>;
export type RoomSearchResultDTO = z.infer<typeof RoomSearchResultSchema>;
export type SearchResultsDTO = z.infer<typeof SearchResultsSchema>;
