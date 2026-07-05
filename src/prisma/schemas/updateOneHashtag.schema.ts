import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { HashtagUpdateInputObjectSchema as HashtagUpdateInputObjectSchema } from "./objects/HashtagUpdateInput.schema";
import { HashtagUncheckedUpdateInputObjectSchema as HashtagUncheckedUpdateInputObjectSchema } from "./objects/HashtagUncheckedUpdateInput.schema";
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from "./objects/HashtagWhereUniqueInput.schema";

export const HashtagUpdateOneSchema: z.ZodType<Prisma.HashtagUpdateArgs> = z
  .object({
    data: z.union([
      HashtagUpdateInputObjectSchema,
      HashtagUncheckedUpdateInputObjectSchema,
    ]),
    where: HashtagWhereUniqueInputObjectSchema,
  })
  .strict() as unknown as z.ZodType<Prisma.HashtagUpdateArgs>;

export const HashtagUpdateOneZodSchema = z
  .object({
    data: z.union([
      HashtagUpdateInputObjectSchema,
      HashtagUncheckedUpdateInputObjectSchema,
    ]),
    where: HashtagWhereUniqueInputObjectSchema,
  })
  .strict();
