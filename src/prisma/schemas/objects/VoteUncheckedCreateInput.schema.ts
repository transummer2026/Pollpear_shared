import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  createdById: z.number().int()
}).strict();
export const VoteUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VoteUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUncheckedCreateInput>;
export const VoteUncheckedCreateInputObjectZodSchema = makeSchema();
