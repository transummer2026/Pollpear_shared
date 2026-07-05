import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { PollTypeSchema } from "../enums/PollType.schema";

const nestedenumpolltypefilterSchema = z
  .object({
    equals: PollTypeSchema.optional(),
    in: PollTypeSchema.array().optional(),
    notIn: PollTypeSchema.array().optional(),
    not: z
      .union([
        PollTypeSchema,
        z.lazy(() => NestedEnumPollTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const NestedEnumPollTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumPollTypeFilter> =
  nestedenumpolltypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumPollTypeFilter>;
export const NestedEnumPollTypeFilterObjectZodSchema =
  nestedenumpolltypefilterSchema;
