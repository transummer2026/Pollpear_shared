import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionUpdateWithoutPollInputObjectSchema as OptionUpdateWithoutPollInputObjectSchema } from './OptionUpdateWithoutPollInput.schema';
import { OptionUncheckedUpdateWithoutPollInputObjectSchema as OptionUncheckedUpdateWithoutPollInputObjectSchema } from './OptionUncheckedUpdateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OptionUpdateWithoutPollInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutPollInputObjectSchema)])
}).strict();
export const OptionUpdateWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionUpdateWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateWithWhereUniqueWithoutPollInput>;
export const OptionUpdateWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
