/**
 * Reserved for constants with no schema attached. Empty for now: the shared
 * constants that exist are the bounds a schema enforces (MAX_MESSAGE_LENGTH,
 * IMAGE_MAX_BYTES, ...) and are exported beside that schema so the value and
 * the rule cannot drift apart. The `export {}` keeps this file an ES module so
 * the root barrel stays valid.
 */
export {};
