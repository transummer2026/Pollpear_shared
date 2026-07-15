import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateWithoutVoteOptionsInputObjectSchema as OptionCreateWithoutVoteOptionsInputObjectSchema } from './OptionCreateWithoutVoteOptionsInput.schema';
import { OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema as OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema } from './OptionUncheckedCreateWithoutVoteOptionsInput.schema';
import { OptionCreateOrConnectWithoutVoteOptionsInputObjectSchema as OptionCreateOrConnectWithoutVoteOptionsInputObjectSchema } from './OptionCreateOrConnectWithoutVoteOptionsInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OptionCreateWithoutVoteOptionsInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OptionCreateOrConnectWithoutVoteOptionsInputObjectSchema).optional(),
  connect: z.lazy(() => OptionWhereUniqueInputObjectSchema).optional()
}).strict();
export const OptionCreateNestedOneWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.OptionCreateNestedOneWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateNestedOneWithoutVoteOptionsInput>;
export const OptionCreateNestedOneWithoutVoteOptionsInputObjectZodSchema = makeSchema();
