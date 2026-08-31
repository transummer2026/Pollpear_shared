import { z } from 'zod';

/**
 * Peels the `.nullish()` wrappers the Prisma generator puts on every optional
 * column, so extra rules can be chained onto the inner schema before making it
 * nullish again: `unwrapNullish(shape.bio).max(255).nullish()`.
 *
 * Zod 4 exposes no built-in for this - see
 * https://github.com/colinhacks/zod/issues/5208
 */
export const unwrapNullish = <T extends z.ZodTypeAny>(
  schema: z.ZodOptional<z.ZodNullable<T>>,
): T => schema.unwrap().unwrap();
