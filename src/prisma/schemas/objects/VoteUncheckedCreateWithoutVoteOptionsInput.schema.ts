import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  label: z.string().optional().nullable(),
  createdById: z.number().int(),
  pollId: z.number().int()
}).strict();
export const VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.VoteUncheckedCreateWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUncheckedCreateWithoutVoteOptionsInput>;
export const VoteUncheckedCreateWithoutVoteOptionsInputObjectZodSchema = makeSchema();
