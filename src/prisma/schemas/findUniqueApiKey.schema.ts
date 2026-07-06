import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from "./objects/ApiKeyWhereUniqueInput.schema";

export const ApiKeyFindUniqueSchema: z.ZodType<Prisma.ApiKeyFindUniqueArgs> = z
  .object({ where: ApiKeyWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.ApiKeyFindUniqueArgs>;

export const ApiKeyFindUniqueZodSchema = z
  .object({ where: ApiKeyWhereUniqueInputObjectSchema })
  .strict();
