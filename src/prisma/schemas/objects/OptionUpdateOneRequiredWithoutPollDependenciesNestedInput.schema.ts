import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateWithoutPollDependenciesInputObjectSchema as OptionCreateWithoutPollDependenciesInputObjectSchema } from './OptionCreateWithoutPollDependenciesInput.schema';
import { OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema as OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema } from './OptionUncheckedCreateWithoutPollDependenciesInput.schema';
import { OptionCreateOrConnectWithoutPollDependenciesInputObjectSchema as OptionCreateOrConnectWithoutPollDependenciesInputObjectSchema } from './OptionCreateOrConnectWithoutPollDependenciesInput.schema';
import { OptionUpsertWithoutPollDependenciesInputObjectSchema as OptionUpsertWithoutPollDependenciesInputObjectSchema } from './OptionUpsertWithoutPollDependenciesInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionUpdateToOneWithWhereWithoutPollDependenciesInputObjectSchema as OptionUpdateToOneWithWhereWithoutPollDependenciesInputObjectSchema } from './OptionUpdateToOneWithWhereWithoutPollDependenciesInput.schema';
import { OptionUpdateWithoutPollDependenciesInputObjectSchema as OptionUpdateWithoutPollDependenciesInputObjectSchema } from './OptionUpdateWithoutPollDependenciesInput.schema';
import { OptionUncheckedUpdateWithoutPollDependenciesInputObjectSchema as OptionUncheckedUpdateWithoutPollDependenciesInputObjectSchema } from './OptionUncheckedUpdateWithoutPollDependenciesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OptionCreateWithoutPollDependenciesInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OptionCreateOrConnectWithoutPollDependenciesInputObjectSchema).optional(),
  upsert: z.lazy(() => OptionUpsertWithoutPollDependenciesInputObjectSchema).optional(),
  connect: z.lazy(() => OptionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OptionUpdateToOneWithWhereWithoutPollDependenciesInputObjectSchema), z.lazy(() => OptionUpdateWithoutPollDependenciesInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutPollDependenciesInputObjectSchema)]).optional()
}).strict();
export const OptionUpdateOneRequiredWithoutPollDependenciesNestedInputObjectSchema: z.ZodType<Prisma.OptionUpdateOneRequiredWithoutPollDependenciesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateOneRequiredWithoutPollDependenciesNestedInput>;
export const OptionUpdateOneRequiredWithoutPollDependenciesNestedInputObjectZodSchema = makeSchema();
