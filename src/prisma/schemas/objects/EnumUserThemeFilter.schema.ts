import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { UserThemeSchema } from "../enums/UserTheme.schema";
import { NestedEnumUserThemeFilterObjectSchema as NestedEnumUserThemeFilterObjectSchema } from "./NestedEnumUserThemeFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: UserThemeSchema.optional(),
      in: UserThemeSchema.array().optional(),
      notIn: UserThemeSchema.array().optional(),
      not: z
        .union([
          UserThemeSchema,
          z.lazy(() => NestedEnumUserThemeFilterObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const EnumUserThemeFilterObjectSchema: z.ZodType<Prisma.EnumUserThemeFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumUserThemeFilter>;
export const EnumUserThemeFilterObjectZodSchema = makeSchema();
