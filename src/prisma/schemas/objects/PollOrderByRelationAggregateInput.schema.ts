import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { SortOrderSchema } from "../enums/SortOrder.schema";

const makeSchema = () =>
  z
    .object({
      _count: SortOrderSchema.optional(),
    })
    .strict();
export const PollOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PollOrderByRelationAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollOrderByRelationAggregateInput>;
export const PollOrderByRelationAggregateInputObjectZodSchema = makeSchema();
