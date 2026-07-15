import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionUpdateWithoutPollDependenciesInputObjectSchema as OptionUpdateWithoutPollDependenciesInputObjectSchema } from './OptionUpdateWithoutPollDependenciesInput.schema';
import { OptionUncheckedUpdateWithoutPollDependenciesInputObjectSchema as OptionUncheckedUpdateWithoutPollDependenciesInputObjectSchema } from './OptionUncheckedUpdateWithoutPollDependenciesInput.schema';
import { OptionCreateWithoutPollDependenciesInputObjectSchema as OptionCreateWithoutPollDependenciesInputObjectSchema } from './OptionCreateWithoutPollDependenciesInput.schema';
import { OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema as OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema } from './OptionUncheckedCreateWithoutPollDependenciesInput.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OptionUpdateWithoutPollDependenciesInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutPollDependenciesInputObjectSchema)]),
  create: z.union([z.lazy(() => OptionCreateWithoutPollDependenciesInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema)]),
  where: z.lazy(() => OptionWhereInputObjectSchema).optional()
}).strict();
export const OptionUpsertWithoutPollDependenciesInputObjectSchema: z.ZodType<Prisma.OptionUpsertWithoutPollDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpsertWithoutPollDependenciesInput>;
export const OptionUpsertWithoutPollDependenciesInputObjectZodSchema = makeSchema();
