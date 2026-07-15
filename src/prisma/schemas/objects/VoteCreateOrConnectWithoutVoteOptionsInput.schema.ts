import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteCreateWithoutVoteOptionsInputObjectSchema as VoteCreateWithoutVoteOptionsInputObjectSchema } from './VoteCreateWithoutVoteOptionsInput.schema';
import { VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema as VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema } from './VoteUncheckedCreateWithoutVoteOptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VoteCreateWithoutVoteOptionsInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema)])
}).strict();
export const VoteCreateOrConnectWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.VoteCreateOrConnectWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateOrConnectWithoutVoteOptionsInput>;
export const VoteCreateOrConnectWithoutVoteOptionsInputObjectZodSchema = makeSchema();
