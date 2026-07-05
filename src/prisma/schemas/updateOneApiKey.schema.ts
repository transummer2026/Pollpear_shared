import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { ApiKeyUpdateInputObjectSchema as ApiKeyUpdateInputObjectSchema } from "./objects/ApiKeyUpdateInput.schema";
import { ApiKeyUncheckedUpdateInputObjectSchema as ApiKeyUncheckedUpdateInputObjectSchema } from "./objects/ApiKeyUncheckedUpdateInput.schema";
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from "./objects/ApiKeyWhereUniqueInput.schema";

export const ApiKeyUpdateOneSchema: z.ZodType<Prisma.ApiKeyUpdateArgs> = z
  .object({
    data: z.union([
      ApiKeyUpdateInputObjectSchema,
      ApiKeyUncheckedUpdateInputObjectSchema,
    ]),
    where: ApiKeyWhereUniqueInputObjectSchema,
  })
  .strict() as unknown as z.ZodType<Prisma.ApiKeyUpdateArgs>;

export const ApiKeyUpdateOneZodSchema = z
  .object({
    data: z.union([
      ApiKeyUpdateInputObjectSchema,
      ApiKeyUncheckedUpdateInputObjectSchema,
    ]),
    where: ApiKeyWhereUniqueInputObjectSchema,
  })
  .strict();
