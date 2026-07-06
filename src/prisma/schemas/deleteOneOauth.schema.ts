import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { OauthWhereUniqueInputObjectSchema as OauthWhereUniqueInputObjectSchema } from "./objects/OauthWhereUniqueInput.schema";

export const OauthDeleteOneSchema: z.ZodType<Prisma.OauthDeleteArgs> = z
  .object({ where: OauthWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.OauthDeleteArgs>;

export const OauthDeleteOneZodSchema = z
  .object({ where: OauthWhereUniqueInputObjectSchema })
  .strict();
