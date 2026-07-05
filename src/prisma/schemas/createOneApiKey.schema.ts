import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { ApiKeyUncheckedCreateInputObjectSchema as ApiKeyUncheckedCreateInputObjectSchema } from "./objects/ApiKeyUncheckedCreateInput.schema";

export const ApiKeyCreateOneSchema: z.ZodType<Prisma.ApiKeyCreateArgs> = z
  .object({ data: ApiKeyUncheckedCreateInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.ApiKeyCreateArgs>;

export const ApiKeyCreateOneZodSchema = z
  .object({ data: ApiKeyUncheckedCreateInputObjectSchema })
  .strict();
