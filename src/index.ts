/**
 * `@pollpear/shared` - the contract shared by the Pollpear frontend, backend
 * and gateway.
 *
 * Everything here is validation-only: Zod schemas plus the types inferred from
 * them, so each payload is described exactly once and both sides of the wire
 * agree on it. There is no runtime logic and no build step - consumers compile
 * these sources directly through a path alias (`@shared/*`), which is why they
 * usually deep-import a single module instead of going through this barrel.
 */
export * from './constants';
export * from './schemas';
export * from './types';
