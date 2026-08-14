import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  createdById: z.number().int(),
  pollId: z.number().int()
}).strict();
export const VoteCreatedByIdPollIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.VoteCreatedByIdPollIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreatedByIdPollIdCompoundUniqueInput>;
export const VoteCreatedByIdPollIdCompoundUniqueInputObjectZodSchema = makeSchema();
