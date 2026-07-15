import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateNestedOneWithoutVoteOptionsInputObjectSchema as OptionCreateNestedOneWithoutVoteOptionsInputObjectSchema } from './OptionCreateNestedOneWithoutVoteOptionsInput.schema'

const makeSchema = () => z.object({
  option: z.lazy(() => OptionCreateNestedOneWithoutVoteOptionsInputObjectSchema)
}).strict();
export const VoteOptionCreateWithoutVoteInputObjectSchema: z.ZodType<Prisma.VoteOptionCreateWithoutVoteInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateWithoutVoteInput>;
export const VoteOptionCreateWithoutVoteInputObjectZodSchema = makeSchema();
