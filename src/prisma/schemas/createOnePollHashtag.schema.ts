import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { PollHashtagUncheckedCreateInputObjectSchema as PollHashtagUncheckedCreateInputObjectSchema } from "./objects/PollHashtagUncheckedCreateInput.schema";

export const PollHashtagCreateOneSchema: z.ZodType<Prisma.PollHashtagCreateArgs> =
  z
    .object({ data: PollHashtagUncheckedCreateInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.PollHashtagCreateArgs>;

export const PollHashtagCreateOneZodSchema = z
  .object({ data: PollHashtagUncheckedCreateInputObjectSchema })
  .strict();
