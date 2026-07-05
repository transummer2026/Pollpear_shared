import type { Prisma } from "../../../../src/generated/prisma/client";
import * as z from "zod";
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from "./objects/InvitationWhereUniqueInput.schema";

export const InvitationDeleteOneSchema: z.ZodType<Prisma.InvitationDeleteArgs> =
  z
    .object({ where: InvitationWhereUniqueInputObjectSchema })
    .strict() as unknown as z.ZodType<Prisma.InvitationDeleteArgs>;

export const InvitationDeleteOneZodSchema = z
  .object({ where: InvitationWhereUniqueInputObjectSchema })
  .strict();
