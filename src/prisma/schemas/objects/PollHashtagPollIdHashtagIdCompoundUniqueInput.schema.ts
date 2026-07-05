import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      pollId: z.number().int(),
      hashtagId: z.number().int(),
    })
    .strict();
export const PollHashtagPollIdHashtagIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.PollHashtagPollIdHashtagIdCompoundUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollHashtagPollIdHashtagIdCompoundUniqueInput>;
export const PollHashtagPollIdHashtagIdCompoundUniqueInputObjectZodSchema =
  makeSchema();
