import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionUpdateWithoutPollInputObjectSchema as OptionUpdateWithoutPollInputObjectSchema } from './OptionUpdateWithoutPollInput.schema';
import { OptionUncheckedUpdateWithoutPollInputObjectSchema as OptionUncheckedUpdateWithoutPollInputObjectSchema } from './OptionUncheckedUpdateWithoutPollInput.schema';
import { OptionCreateWithoutPollInputObjectSchema as OptionCreateWithoutPollInputObjectSchema } from './OptionCreateWithoutPollInput.schema';
import { OptionUncheckedCreateWithoutPollInputObjectSchema as OptionUncheckedCreateWithoutPollInputObjectSchema } from './OptionUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OptionUpdateWithoutPollInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutPollInputObjectSchema)]),
  create: z.union([z.lazy(() => OptionCreateWithoutPollInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const OptionUpsertWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionUpsertWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpsertWithWhereUniqueWithoutPollInput>;
export const OptionUpsertWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
