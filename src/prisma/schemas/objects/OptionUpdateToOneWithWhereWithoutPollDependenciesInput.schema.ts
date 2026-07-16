import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema';
import { OptionUpdateWithoutPollDependenciesInputObjectSchema as OptionUpdateWithoutPollDependenciesInputObjectSchema } from './OptionUpdateWithoutPollDependenciesInput.schema';
import { OptionUncheckedUpdateWithoutPollDependenciesInputObjectSchema as OptionUncheckedUpdateWithoutPollDependenciesInputObjectSchema } from './OptionUncheckedUpdateWithoutPollDependenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OptionUpdateWithoutPollDependenciesInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutPollDependenciesInputObjectSchema)])
}).strict();
export const OptionUpdateToOneWithWhereWithoutPollDependenciesInputObjectSchema: z.ZodType<Prisma.OptionUpdateToOneWithWhereWithoutPollDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateToOneWithWhereWithoutPollDependenciesInput>;
export const OptionUpdateToOneWithWhereWithoutPollDependenciesInputObjectZodSchema = makeSchema();
