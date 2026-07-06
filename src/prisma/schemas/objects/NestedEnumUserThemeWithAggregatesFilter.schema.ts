import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { UserThemeSchema } from "../enums/UserTheme.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumUserThemeFilterObjectSchema as NestedEnumUserThemeFilterObjectSchema } from "./NestedEnumUserThemeFilter.schema";

const nestedenumuserthemewithaggregatesfilterSchema = z
  .object({
    equals: UserThemeSchema.optional(),
    in: UserThemeSchema.array().optional(),
    notIn: UserThemeSchema.array().optional(),
    not: z
      .union([
        UserThemeSchema,
        z.lazy(() => NestedEnumUserThemeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumUserThemeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumUserThemeFilterObjectSchema).optional(),
  })
  .strict();
export const NestedEnumUserThemeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserThemeWithAggregatesFilter> =
  nestedenumuserthemewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserThemeWithAggregatesFilter>;
export const NestedEnumUserThemeWithAggregatesFilterObjectZodSchema =
  nestedenumuserthemewithaggregatesfilterSchema;
