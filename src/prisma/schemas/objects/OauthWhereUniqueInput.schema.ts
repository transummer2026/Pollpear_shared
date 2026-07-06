import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { OauthProviderProviderUserIdCompoundUniqueInputObjectSchema as OauthProviderProviderUserIdCompoundUniqueInputObjectSchema } from "./OauthProviderProviderUserIdCompoundUniqueInput.schema";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      provider_providerUserId: z
        .lazy(() => OauthProviderProviderUserIdCompoundUniqueInputObjectSchema)
        .optional(),
    })
    .strict();
export const OauthWhereUniqueInputObjectSchema: z.ZodType<Prisma.OauthWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.OauthWhereUniqueInput>;
export const OauthWhereUniqueInputObjectZodSchema = makeSchema();
