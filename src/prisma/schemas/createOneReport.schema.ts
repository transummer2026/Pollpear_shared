import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { ReportUncheckedCreateInputObjectSchema as ReportUncheckedCreateInputObjectSchema } from "./objects/ReportUncheckedCreateInput.schema";

export const ReportCreateOneSchema: z.ZodType<Prisma.ReportCreateArgs> = z
  .object({ data: ReportUncheckedCreateInputObjectSchema })
  .strict() as unknown as z.ZodType<Prisma.ReportCreateArgs>;

export const ReportCreateOneZodSchema = z
  .object({ data: ReportUncheckedCreateInputObjectSchema })
  .strict();
