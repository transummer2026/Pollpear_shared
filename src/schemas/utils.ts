import { z } from 'zod';

// https://github.com/colinhacks/zod/issues/5208
export const unwrapNullish = <T extends z.ZodTypeAny>(
  schema: z.ZodOptional<z.ZodNullable<T>>,
): T => schema.unwrap().unwrap();
