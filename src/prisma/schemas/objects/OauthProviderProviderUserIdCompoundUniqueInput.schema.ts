import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { OauthProviderSchema } from "../enums/OauthProvider.schema";

const makeSchema = () =>
  z
    .object({
      provider: OauthProviderSchema,
      providerUserId: z.string(),
    })
    .strict();
export const OauthProviderProviderUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.OauthProviderProviderUserIdCompoundUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.OauthProviderProviderUserIdCompoundUniqueInput>;
export const OauthProviderProviderUserIdCompoundUniqueInputObjectZodSchema =
  makeSchema();
