/**
 * Convenience barrel over the domain schemas.
 *
 * Deep-importing a single module (`@shared/schemas/polls.schema`) stays
 * supported and is what most call sites do; this exists so a consumer needing
 * several does not have to list them one by one. Every schema module is
 * re-exported and the exported names are unique across them, so nothing is
 * shadowed here.
 *
 * `utils.ts` is deliberately absent: `unwrapNullish` only makes sense when
 * composing on top of the generated Prisma schemas, which happens inside this
 * package and not in its consumers.
 */
export * from './auth.schema';
export * from './oauth.schema';
export * from './formats.schema';
export * from './users.schema';
export * from './api-key.schema';
export * from './polls.schema';
export * from './option.schema';
export * from './vote.schema';
export * from './vote-option.schema';
export * from './hashtag.schema';
export * from './poll-hashtag.schema';
export * from './rooms.schema';
export * from './room-member.schema';
export * from './invitations.schema';
export * from './messages.schema';
export * from './uploads.schema';
export * from './search.schema';
export * from './friendship.schema';
export * from './block.schema';
export * from './notification.schema';
