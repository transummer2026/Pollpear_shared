import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateNestedOneWithoutVoteOptionsInputObjectSchema as VoteCreateNestedOneWithoutVoteOptionsInputObjectSchema } from './VoteCreateNestedOneWithoutVoteOptionsInput.schema'

const makeSchema = () => z.object({
  vote: z.lazy(() => VoteCreateNestedOneWithoutVoteOptionsInputObjectSchema)
}).strict();
export const VoteOptionCreateWithoutOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionCreateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateWithoutOptionInput>;
export const VoteOptionCreateWithoutOptionInputObjectZodSchema = makeSchema();
