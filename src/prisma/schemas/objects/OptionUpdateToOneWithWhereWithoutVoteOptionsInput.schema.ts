import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema';
import { OptionUpdateWithoutVoteOptionsInputObjectSchema as OptionUpdateWithoutVoteOptionsInputObjectSchema } from './OptionUpdateWithoutVoteOptionsInput.schema';
import { OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema as OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema } from './OptionUncheckedUpdateWithoutVoteOptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OptionUpdateWithoutVoteOptionsInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema)])
}).strict();
export const OptionUpdateToOneWithWhereWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.OptionUpdateToOneWithWhereWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateToOneWithWhereWithoutVoteOptionsInput>;
export const OptionUpdateToOneWithWhereWithoutVoteOptionsInputObjectZodSchema = makeSchema();
