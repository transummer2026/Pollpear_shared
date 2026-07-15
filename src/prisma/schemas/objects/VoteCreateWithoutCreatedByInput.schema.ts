import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateNestedManyWithoutVoteInputObjectSchema as VoteOptionCreateNestedManyWithoutVoteInputObjectSchema } from './VoteOptionCreateNestedManyWithoutVoteInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutVoteInputObjectSchema).optional()
}).strict();
export const VoteCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.VoteCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateWithoutCreatedByInput>;
export const VoteCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
