import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { BlockBlockerIdBlockedIdCompoundUniqueInputObjectSchema as BlockBlockerIdBlockedIdCompoundUniqueInputObjectSchema } from "./BlockBlockerIdBlockedIdCompoundUniqueInput.schema";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      blockerId_blockedId: z
        .lazy(() => BlockBlockerIdBlockedIdCompoundUniqueInputObjectSchema)
        .optional(),
    })
    .strict();
export const BlockWhereUniqueInputObjectSchema: z.ZodType<Prisma.BlockWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BlockWhereUniqueInput>;
export const BlockWhereUniqueInputObjectZodSchema = makeSchema();
