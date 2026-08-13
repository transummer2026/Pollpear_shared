import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  pollId: z.number().int(),
  createdById: z.number().int()
}).strict();
export const VotePollIdCreatedByIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.VotePollIdCreatedByIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VotePollIdCreatedByIdCompoundUniqueInput>;
export const VotePollIdCreatedByIdCompoundUniqueInputObjectZodSchema = makeSchema();
