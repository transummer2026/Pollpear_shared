import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateWithoutVoteOptionsInputObjectSchema as OptionCreateWithoutVoteOptionsInputObjectSchema } from './OptionCreateWithoutVoteOptionsInput.schema';
import { OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema as OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema } from './OptionUncheckedCreateWithoutVoteOptionsInput.schema';
import { OptionCreateOrConnectWithoutVoteOptionsInputObjectSchema as OptionCreateOrConnectWithoutVoteOptionsInputObjectSchema } from './OptionCreateOrConnectWithoutVoteOptionsInput.schema';
import { OptionUpsertWithoutVoteOptionsInputObjectSchema as OptionUpsertWithoutVoteOptionsInputObjectSchema } from './OptionUpsertWithoutVoteOptionsInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionUpdateToOneWithWhereWithoutVoteOptionsInputObjectSchema as OptionUpdateToOneWithWhereWithoutVoteOptionsInputObjectSchema } from './OptionUpdateToOneWithWhereWithoutVoteOptionsInput.schema';
import { OptionUpdateWithoutVoteOptionsInputObjectSchema as OptionUpdateWithoutVoteOptionsInputObjectSchema } from './OptionUpdateWithoutVoteOptionsInput.schema';
import { OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema as OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema } from './OptionUncheckedUpdateWithoutVoteOptionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OptionCreateWithoutVoteOptionsInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OptionCreateOrConnectWithoutVoteOptionsInputObjectSchema).optional(),
  upsert: z.lazy(() => OptionUpsertWithoutVoteOptionsInputObjectSchema).optional(),
  connect: z.lazy(() => OptionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OptionUpdateToOneWithWhereWithoutVoteOptionsInputObjectSchema), z.lazy(() => OptionUpdateWithoutVoteOptionsInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutVoteOptionsInputObjectSchema)]).optional()
}).strict();
export const OptionUpdateOneRequiredWithoutVoteOptionsNestedInputObjectSchema: z.ZodType<Prisma.OptionUpdateOneRequiredWithoutVoteOptionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateOneRequiredWithoutVoteOptionsNestedInput>;
export const OptionUpdateOneRequiredWithoutVoteOptionsNestedInputObjectZodSchema = makeSchema();
