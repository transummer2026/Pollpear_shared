import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionCreateWithoutVoteOptionsInputObjectSchema as OptionCreateWithoutVoteOptionsInputObjectSchema } from './OptionCreateWithoutVoteOptionsInput.schema';
import { OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema as OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema } from './OptionUncheckedCreateWithoutVoteOptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OptionCreateWithoutVoteOptionsInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema)])
}).strict();
export const OptionCreateOrConnectWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.OptionCreateOrConnectWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateOrConnectWithoutVoteOptionsInput>;
export const OptionCreateOrConnectWithoutVoteOptionsInputObjectZodSchema = makeSchema();
