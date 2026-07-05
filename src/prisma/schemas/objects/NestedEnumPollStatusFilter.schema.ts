import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { PollStatusSchema } from "../enums/PollStatus.schema";

const nestedenumpollstatusfilterSchema = z
  .object({
    equals: PollStatusSchema.optional(),
    in: PollStatusSchema.array().optional(),
    notIn: PollStatusSchema.array().optional(),
    not: z
      .union([
        PollStatusSchema,
        z.lazy(() => NestedEnumPollStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const NestedEnumPollStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumPollStatusFilter> =
  nestedenumpollstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumPollStatusFilter>;
export const NestedEnumPollStatusFilterObjectZodSchema =
  nestedenumpollstatusfilterSchema;
