import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { OauthUncheckedCreateInputObjectSchema as OauthUncheckedCreateInputObjectSchema } from "./objects/OauthUncheckedCreateInput.schema";

export const OauthCreateOneSchema: z.ZodType<Prisma.OauthCreateArgs> = z
  .object({ data: OauthUncheckedCreateInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.OauthCreateArgs>;

export const OauthCreateOneZodSchema = z
  .object({ data: OauthUncheckedCreateInputObjectSchema })
  .strict();
