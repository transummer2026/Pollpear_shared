import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { OauthProviderSchema } from "../enums/OauthProvider.schema";
import { NestedEnumOauthProviderFilterObjectSchema as NestedEnumOauthProviderFilterObjectSchema } from "./NestedEnumOauthProviderFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: OauthProviderSchema.optional(),
      in: OauthProviderSchema.array().optional(),
      notIn: OauthProviderSchema.array().optional(),
      not: z
        .union([
          OauthProviderSchema,
          z.lazy(() => NestedEnumOauthProviderFilterObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const EnumOauthProviderFilterObjectSchema: z.ZodType<Prisma.EnumOauthProviderFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumOauthProviderFilter>;
export const EnumOauthProviderFilterObjectZodSchema = makeSchema();
