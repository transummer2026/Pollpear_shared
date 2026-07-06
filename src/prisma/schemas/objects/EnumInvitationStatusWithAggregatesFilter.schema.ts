import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { InvitationStatusSchema } from "../enums/InvitationStatus.schema";
import { NestedEnumInvitationStatusWithAggregatesFilterObjectSchema as NestedEnumInvitationStatusWithAggregatesFilterObjectSchema } from "./NestedEnumInvitationStatusWithAggregatesFilter.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumInvitationStatusFilterObjectSchema as NestedEnumInvitationStatusFilterObjectSchema } from "./NestedEnumInvitationStatusFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: InvitationStatusSchema.optional(),
      in: InvitationStatusSchema.array().optional(),
      notIn: InvitationStatusSchema.array().optional(),
      not: z
        .union([
          InvitationStatusSchema,
          z.lazy(
            () => NestedEnumInvitationStatusWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumInvitationStatusFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumInvitationStatusFilterObjectSchema)
        .optional(),
    })
    .strict();
export const EnumInvitationStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumInvitationStatusWithAggregatesFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumInvitationStatusWithAggregatesFilter>;
export const EnumInvitationStatusWithAggregatesFilterObjectZodSchema =
  makeSchema();
