import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema';
import { PollDependencyUpdateWithoutOptionInputObjectSchema as PollDependencyUpdateWithoutOptionInputObjectSchema } from './PollDependencyUpdateWithoutOptionInput.schema';
import { PollDependencyUncheckedUpdateWithoutOptionInputObjectSchema as PollDependencyUncheckedUpdateWithoutOptionInputObjectSchema } from './PollDependencyUncheckedUpdateWithoutOptionInput.schema';
import { PollDependencyCreateWithoutOptionInputObjectSchema as PollDependencyCreateWithoutOptionInputObjectSchema } from './PollDependencyCreateWithoutOptionInput.schema';
import { PollDependencyUncheckedCreateWithoutOptionInputObjectSchema as PollDependencyUncheckedCreateWithoutOptionInputObjectSchema } from './PollDependencyUncheckedCreateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollDependencyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PollDependencyUpdateWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyUncheckedUpdateWithoutOptionInputObjectSchema)]),
  create: z.union([z.lazy(() => PollDependencyCreateWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyUncheckedCreateWithoutOptionInputObjectSchema)])
}).strict();
export const PollDependencyUpsertWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyUpsertWithWhereUniqueWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpsertWithWhereUniqueWithoutOptionInput>;
export const PollDependencyUpsertWithWhereUniqueWithoutOptionInputObjectZodSchema = makeSchema();
