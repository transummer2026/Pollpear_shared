import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateNestedOneWithoutVoteOptionsInputObjectSchema as VoteCreateNestedOneWithoutVoteOptionsInputObjectSchema } from './VoteCreateNestedOneWithoutVoteOptionsInput.schema';
import { OptionCreateNestedOneWithoutVoteOptionsInputObjectSchema as OptionCreateNestedOneWithoutVoteOptionsInputObjectSchema } from './OptionCreateNestedOneWithoutVoteOptionsInput.schema'

const makeSchema = () => z.object({
  vote: z.lazy(() => VoteCreateNestedOneWithoutVoteOptionsInputObjectSchema),
  option: z.lazy(() => OptionCreateNestedOneWithoutVoteOptionsInputObjectSchema)
}).strict();
export const VoteOptionCreateInputObjectSchema: z.ZodType<Prisma.VoteOptionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateInput>;
export const VoteOptionCreateInputObjectZodSchema = makeSchema();
