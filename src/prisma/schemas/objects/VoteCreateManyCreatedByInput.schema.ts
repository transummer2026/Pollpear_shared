import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable()
}).strict();
export const VoteCreateManyCreatedByInputObjectSchema: z.ZodType<Prisma.VoteCreateManyCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateManyCreatedByInput>;
export const VoteCreateManyCreatedByInputObjectZodSchema = makeSchema();
