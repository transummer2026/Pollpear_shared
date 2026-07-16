import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteUpdateWithoutVoteOptionsInputObjectSchema as VoteUpdateWithoutVoteOptionsInputObjectSchema } from './VoteUpdateWithoutVoteOptionsInput.schema';
import { VoteUncheckedUpdateWithoutVoteOptionsInputObjectSchema as VoteUncheckedUpdateWithoutVoteOptionsInputObjectSchema } from './VoteUncheckedUpdateWithoutVoteOptionsInput.schema';
import { VoteCreateWithoutVoteOptionsInputObjectSchema as VoteCreateWithoutVoteOptionsInputObjectSchema } from './VoteCreateWithoutVoteOptionsInput.schema';
import { VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema as VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema } from './VoteUncheckedCreateWithoutVoteOptionsInput.schema';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './VoteWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => VoteUpdateWithoutVoteOptionsInputObjectSchema), z.lazy(() => VoteUncheckedUpdateWithoutVoteOptionsInputObjectSchema)]),
  create: z.union([z.lazy(() => VoteCreateWithoutVoteOptionsInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutVoteOptionsInputObjectSchema)]),
  where: z.lazy(() => VoteWhereInputObjectSchema).optional()
}).strict();
export const VoteUpsertWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.VoteUpsertWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpsertWithoutVoteOptionsInput>;
export const VoteUpsertWithoutVoteOptionsInputObjectZodSchema = makeSchema();
