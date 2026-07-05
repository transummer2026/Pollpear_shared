import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { VoteOrderByWithRelationInputObjectSchema as VoteOrderByWithRelationInputObjectSchema } from "./VoteOrderByWithRelationInput.schema";
import { OptionOrderByWithRelationInputObjectSchema as OptionOrderByWithRelationInputObjectSchema } from "./OptionOrderByWithRelationInput.schema";

const makeSchema = () =>
  z
    .object({
      voteId: SortOrderSchema.optional(),
      optionId: SortOrderSchema.optional(),
      vote: z.lazy(() => VoteOrderByWithRelationInputObjectSchema).optional(),
      option: z
        .lazy(() => OptionOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();
export const VoteOptionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VoteOptionOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.VoteOptionOrderByWithRelationInput>;
export const VoteOptionOrderByWithRelationInputObjectZodSchema = makeSchema();
