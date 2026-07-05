import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from "./PollOrderByWithRelationInput.schema";

const makeSchema = () =>
  z
    .object({
      userId: SortOrderSchema.optional(),
      pollId: SortOrderSchema.optional(),
      user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
      poll: z.lazy(() => PollOrderByWithRelationInputObjectSchema).optional(),
    })
    .strict();
export const PollTemplateOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PollTemplateOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollTemplateOrderByWithRelationInput>;
export const PollTemplateOrderByWithRelationInputObjectZodSchema = makeSchema();
