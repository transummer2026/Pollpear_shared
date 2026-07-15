import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserThemeSchema } from '../enums/UserTheme.schema'

const nestedenumuserthemefilterSchema = z.object({
  equals: UserThemeSchema.optional(),
  in: UserThemeSchema.array().optional(),
  notIn: UserThemeSchema.array().optional(),
  not: z.union([UserThemeSchema, z.lazy(() => NestedEnumUserThemeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumUserThemeFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserThemeFilter> = nestedenumuserthemefilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserThemeFilter>;
export const NestedEnumUserThemeFilterObjectZodSchema = nestedenumuserthemefilterSchema;
