import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { PollTemplateUncheckedCreateInputObjectSchema as PollTemplateUncheckedCreateInputObjectSchema } from "./objects/PollTemplateUncheckedCreateInput.schema";

export const PollTemplateCreateOneSchema: z.ZodType<Prisma.PollTemplateCreateArgs> =
  z
    .object({ data: PollTemplateUncheckedCreateInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.PollTemplateCreateArgs>;

export const PollTemplateCreateOneZodSchema = z
  .object({ data: PollTemplateUncheckedCreateInputObjectSchema })
  .strict();
