import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { OauthUpdateInputObjectSchema as OauthUpdateInputObjectSchema } from "./objects/OauthUpdateInput.schema";
import { OauthUncheckedUpdateInputObjectSchema as OauthUncheckedUpdateInputObjectSchema } from "./objects/OauthUncheckedUpdateInput.schema";
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from "./objects/OauthWhereUniqueInput.schema";

export const OauthUpdateOneSchema: z.ZodType<Prisma.OauthUpdateArgs> = z
  .object({
    data: z.union([
      OauthUpdateInputObjectSchema,
      OauthUncheckedUpdateInputObjectSchema,
    ]),
    where: OauthWhereUniqueInputObjectSchema,
  })
  .strict() as unknown as z.ZodType<Prisma.OauthUpdateArgs>;

export const OauthUpdateOneZodSchema = z
  .object({
    data: z.union([
      OauthUpdateInputObjectSchema,
      OauthUncheckedUpdateInputObjectSchema,
    ]),
    where: OauthWhereUniqueInputObjectSchema,
  })
  .strict();
