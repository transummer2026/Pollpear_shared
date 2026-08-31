import { z } from 'zod';
import { UserSchema } from '../prisma/schemas/models/User.schema';
import { RoomSchema } from '../prisma/schemas/models/Room.schema';

/** The models the global search can return. */
export const SEARCH_MODELS = ['user', 'room'] as const;
export const SearchModelSchema = z.enum(SEARCH_MODELS);

/**
 * `all` is a scope a query may ask for, never the kind of a result, so it is
 * unioned on top instead of being a third member of the enum - that keeps
 * `SearchModel` usable for tagging a result without an impossible case.
 */
export const SearchScopeSchema = z.union([SearchModelSchema, z.literal('all')]);

export const SEARCH_SORT_OPTIONS = ['relevance', 'alphabetical'] as const;
export const SearchSortSchema = z.enum(SEARCH_SORT_OPTIONS);

/**
 * Query string of the search endpoint, hence the coercions - everything
 * arrives as text. Two characters minimum keeps a single keystroke from
 * scanning the whole table, and `limit` is capped at 50.
 */
export const SearchQuerySchema = z.object({
  q: z.string().min(2).max(255),
  type: SearchScopeSchema,
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
  sortBy: SearchSortSchema.default('relevance'),
});

/**
 * Results are trimmed to what a suggestion row draws; the full record is
 * fetched once the user picks one, so a search never becomes a way to bulk-read
 * profiles.
 */
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

/**
 * Both buckets are always present - an empty array for a scope that was not
 * searched - so a caller can render without branching on `type`. The totals
 * are optional because they are only reported when the response is paginated.
 */
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
