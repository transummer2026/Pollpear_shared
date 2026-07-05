import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { VisibilitySchema } from "../enums/Visibility.schema";
import { NestedEnumVisibilityNullableFilterObjectSchema as NestedEnumVisibilityNullableFilterObjectSchema } from "./NestedEnumVisibilityNullableFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: VisibilitySchema.optional().nullable(),
      in: VisibilitySchema.array().optional().nullable(),
      notIn: VisibilitySchema.array().optional().nullable(),
      not: z
        .union([
          VisibilitySchema,
          z.lazy(() => NestedEnumVisibilityNullableFilterObjectSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();
export const EnumVisibilityNullableFilterObjectSchema: z.ZodType<Prisma.EnumVisibilityNullableFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumVisibilityNullableFilter>;
export const EnumVisibilityNullableFilterObjectZodSchema = makeSchema();
