import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema';
import { PollDependencyUpdateWithoutChildPollInputObjectSchema as PollDependencyUpdateWithoutChildPollInputObjectSchema } from './PollDependencyUpdateWithoutChildPollInput.schema';
import { PollDependencyUncheckedUpdateWithoutChildPollInputObjectSchema as PollDependencyUncheckedUpdateWithoutChildPollInputObjectSchema } from './PollDependencyUncheckedUpdateWithoutChildPollInput.schema';
import { PollDependencyCreateWithoutChildPollInputObjectSchema as PollDependencyCreateWithoutChildPollInputObjectSchema } from './PollDependencyCreateWithoutChildPollInput.schema';
import { PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema as PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema } from './PollDependencyUncheckedCreateWithoutChildPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollDependencyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PollDependencyUpdateWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyUncheckedUpdateWithoutChildPollInputObjectSchema)]),
  create: z.union([z.lazy(() => PollDependencyCreateWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema)])
}).strict();
export const PollDependencyUpsertWithWhereUniqueWithoutChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyUpsertWithWhereUniqueWithoutChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpsertWithWhereUniqueWithoutChildPollInput>;
export const PollDependencyUpsertWithWhereUniqueWithoutChildPollInputObjectZodSchema = makeSchema();
