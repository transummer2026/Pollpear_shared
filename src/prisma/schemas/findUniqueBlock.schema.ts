import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from "./objects/BlockWhereUniqueInput.schema";

export const BlockFindUniqueSchema: z.ZodType<Prisma.BlockFindUniqueArgs> = z
  .object({ where: BlockWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.BlockFindUniqueArgs>;

export const BlockFindUniqueZodSchema = z
  .object({ where: BlockWhereUniqueInputObjectSchema })
  .strict();
