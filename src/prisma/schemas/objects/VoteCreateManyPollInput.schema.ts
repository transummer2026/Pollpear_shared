import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  freeField: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  createdById: z.number().int()
}).strict();
export const VoteCreateManyPollInputObjectSchema: z.ZodType<Prisma.VoteCreateManyPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateManyPollInput>;
export const VoteCreateManyPollInputObjectZodSchema = makeSchema();
