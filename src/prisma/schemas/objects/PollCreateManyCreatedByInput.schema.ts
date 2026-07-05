import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { PollTypeSchema } from "../enums/PollType.schema";
import { VisibilitySchema } from "../enums/Visibility.schema";
import { PollStatusSchema } from "../enums/PollStatus.schema";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      title: z.string().max(255),
      description: z.string().optional().nullable(),
      type: PollTypeSchema,
      createdAt: z.coerce.date().optional(),
      publishedAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional(),
      endsAt: z.coerce.date(),
      visibility: VisibilitySchema,
      allowChangeVote: z.boolean(),
      isAnonymous: z.boolean(),
      status: PollStatusSchema,
      roomId: z.number().int().optional().nullable(),
    })
    .strict();
export const PollCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.PollCreateManyCreatedByInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollCreateManyCreatedByInput>;
export const PollCreateManyCreatedByInputObjectZodSchema = makeSchema();
