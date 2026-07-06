import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from "./PollOrderByWithRelationInput.schema";
import { HashtagOrderByWithRelationInputObjectSchema as HashtagOrderByWithRelationInputObjectSchema } from "./HashtagOrderByWithRelationInput.schema";

const makeSchema = () =>
  z
    .object({
      pollId: SortOrderSchema.optional(),
      hashtagId: SortOrderSchema.optional(),
      poll: z.lazy(() => PollOrderByWithRelationInputObjectSchema).optional(),
      hashtag: z
        .lazy(() => HashtagOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();
export const PollHashtagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PollHashtagOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollHashtagOrderByWithRelationInput>;
export const PollHashtagOrderByWithRelationInputObjectZodSchema = makeSchema();
