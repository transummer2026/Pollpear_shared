import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateWithoutVoteOptionsInputObjectSchema as VoteCreateWithoutVoteOptionsInputObjectSchema } from './VoteCreateWithoutVoteOptionsInput.schema';
import { VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema as VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema } from './VoteUncheckedCreateWithoutVoteOptionsInput.schema';
import { VoteCreateOrConnectWithoutVoteOptionsInputObjectSchema as VoteCreateOrConnectWithoutVoteOptionsInputObjectSchema } from './VoteCreateOrConnectWithoutVoteOptionsInput.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutVoteOptionsInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VoteCreateOrConnectWithoutVoteOptionsInputObjectSchema).optional(),
  connect: z.lazy(() => VoteWhereUniqueInputObjectSchema).optional()
}).strict();
export const VoteCreateNestedOneWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.VoteCreateNestedOneWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateNestedOneWithoutVoteOptionsInput>;
export const VoteCreateNestedOneWithoutVoteOptionsInputObjectZodSchema = makeSchema();
