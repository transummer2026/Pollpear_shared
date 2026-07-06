import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from "./objects/HashtagWhereUniqueInput.schema";

export const HashtagFindUniqueSchema: z.ZodType<Prisma.HashtagFindUniqueArgs> =
  z
    .object({ where: HashtagWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.HashtagFindUniqueArgs>;

export const HashtagFindUniqueZodSchema = z
  .object({ where: HashtagWhereUniqueInputObjectSchema })
  .strict();
