import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { PollHashtagPollIdHashtagIdCompoundUniqueInputObjectSchema as PollHashtagPollIdHashtagIdCompoundUniqueInputObjectSchema } from "./PollHashtagPollIdHashtagIdCompoundUniqueInput.schema";

const makeSchema = () =>
  z
    .object({
      pollId_hashtagId: z
        .lazy(() => PollHashtagPollIdHashtagIdCompoundUniqueInputObjectSchema)
        .optional(),
    })
    .strict();
export const PollHashtagWhereUniqueInputObjectSchema: z.ZodType<Prisma.PollHashtagWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollHashtagWhereUniqueInput>;
export const PollHashtagWhereUniqueInputObjectZodSchema = makeSchema();
