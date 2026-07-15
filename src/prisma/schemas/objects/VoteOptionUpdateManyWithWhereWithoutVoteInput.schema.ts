import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionScalarWhereInputObjectSchema as VoteOptionScalarWhereInputObjectSchema } from './VoteOptionScalarWhereInput.schema';
import { VoteOptionUpdateManyMutationInputObjectSchema as VoteOptionUpdateManyMutationInputObjectSchema } from './VoteOptionUpdateManyMutationInput.schema';
import { VoteOptionUncheckedUpdateManyWithoutVoteInputObjectSchema as VoteOptionUncheckedUpdateManyWithoutVoteInputObjectSchema } from './VoteOptionUncheckedUpdateManyWithoutVoteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteOptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VoteOptionUpdateManyMutationInputObjectSchema), z.lazy(() => VoteOptionUncheckedUpdateManyWithoutVoteInputObjectSchema)])
}).strict();
export const VoteOptionUpdateManyWithWhereWithoutVoteInputObjectSchema: z.ZodType<Prisma.VoteOptionUpdateManyWithWhereWithoutVoteInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpdateManyWithWhereWithoutVoteInput>;
export const VoteOptionUpdateManyWithWhereWithoutVoteInputObjectZodSchema = makeSchema();
