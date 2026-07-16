import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionUpdateWithoutVoteOptionsInputObjectSchema as OptionUpdateWithoutVoteOptionsInputObjectSchema } from './OptionUpdateWithoutVoteOptionsInput.schema';
import { OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema as OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema } from './OptionUncheckedUpdateWithoutVoteOptionsInput.schema';
import { OptionCreateWithoutVoteOptionsInputObjectSchema as OptionCreateWithoutVoteOptionsInputObjectSchema } from './OptionCreateWithoutVoteOptionsInput.schema';
import { OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema as OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema } from './OptionUncheckedCreateWithoutVoteOptionsInput.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OptionUpdateWithoutVoteOptionsInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema)]),
  create: z.union([z.lazy(() => OptionCreateWithoutVoteOptionsInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema)]),
  where: z.lazy(() => OptionWhereInputObjectSchema).optional()
}).strict();
export const OptionUpsertWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.OptionUpsertWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpsertWithoutVoteOptionsInput>;
export const OptionUpsertWithoutVoteOptionsInputObjectZodSchema = makeSchema();
