import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereInputObjectSchema as VoteWhereInputObjectSchema } from './VoteWhereInput.schema';
import { VoteUpdateWithoutVoteOptionsInputObjectSchema as VoteUpdateWithoutVoteOptionsInputObjectSchema } from './VoteUpdateWithoutVoteOptionsInput.schema';
import { VoteUncheckedUpdateWithoutVoteOptionsInputObjectSchema as VoteUncheckedUpdateWithoutVoteOptionsInputObjectSchema } from './VoteUncheckedUpdateWithoutVoteOptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => VoteUpdateWithoutVoteOptionsInputObjectSchema), z.lazy(() => VoteUncheckedUpdateWithoutVoteOptionsInputObjectSchema)])
}).strict();
export const VoteUpdateToOneWithWhereWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.VoteUpdateToOneWithWhereWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateToOneWithWhereWithoutVoteOptionsInput>;
export const VoteUpdateToOneWithWhereWithoutVoteOptionsInputObjectZodSchema = makeSchema();
