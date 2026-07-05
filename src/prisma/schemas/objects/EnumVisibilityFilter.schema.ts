import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { VisibilitySchema } from "../enums/Visibility.schema";
import { NestedEnumVisibilityFilterObjectSchema as NestedEnumVisibilityFilterObjectSchema } from "./NestedEnumVisibilityFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: VisibilitySchema.optional(),
      in: VisibilitySchema.array().optional(),
      notIn: VisibilitySchema.array().optional(),
      not: z
        .union([
          VisibilitySchema,
          z.lazy(() => NestedEnumVisibilityFilterObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const EnumVisibilityFilterObjectSchema: z.ZodType<Prisma.EnumVisibilityFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumVisibilityFilter>;
export const EnumVisibilityFilterObjectZodSchema = makeSchema();
