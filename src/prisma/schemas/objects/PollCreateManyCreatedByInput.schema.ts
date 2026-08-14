import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTypeSchema } from '../enums/PollType.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string().max(255),
  description: z.string().optional().nullable(),
  type: PollTypeSchema,
  visibility: VisibilitySchema.optional(),
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  status: PollStatusSchema,
  publishedAt: z.coerce.date().optional().nullable(),
  endsAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  roomId: z.number().int().optional().nullable()
}).strict();
export const PollCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.PollCreateManyCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateManyCreatedByInput>;
export const PollCreateManyCreatedByInputObjectZodSchema = makeSchema();
