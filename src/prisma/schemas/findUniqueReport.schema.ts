import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from "./objects/ReportWhereUniqueInput.schema";

export const ReportFindUniqueSchema: z.ZodType<Prisma.ReportFindUniqueArgs> = z
  .object({ where: ReportWhereUniqueInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.ReportFindUniqueArgs>;

export const ReportFindUniqueZodSchema = z
  .object({ where: ReportWhereUniqueInputObjectSchema })
  .strict();
