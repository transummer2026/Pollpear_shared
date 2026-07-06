import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from "./objects/PollHashtagWhereUniqueInput.schema";

export const PollHashtagFindUniqueSchema: z.ZodType<Prisma.PollHashtagFindUniqueArgs> =
  z
    .object({ where: PollHashtagWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.PollHashtagFindUniqueArgs>;

export const PollHashtagFindUniqueZodSchema = z
  .object({ where: PollHashtagWhereUniqueInputObjectSchema })
  .strict();
