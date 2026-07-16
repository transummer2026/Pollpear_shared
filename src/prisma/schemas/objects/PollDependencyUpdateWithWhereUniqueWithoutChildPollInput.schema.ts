import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema';
import { PollDependencyUpdateWithoutChildPollInputObjectSchema as PollDependencyUpdateWithoutChildPollInputObjectSchema } from './PollDependencyUpdateWithoutChildPollInput.schema';
import { PollDependencyUncheckedUpdateWithoutChildPollInputObjectSchema as PollDependencyUncheckedUpdateWithoutChildPollInputObjectSchema } from './PollDependencyUncheckedUpdateWithoutChildPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollDependencyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PollDependencyUpdateWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyUncheckedUpdateWithoutChildPollInputObjectSchema)])
}).strict();
export const PollDependencyUpdateWithWhereUniqueWithoutChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyUpdateWithWhereUniqueWithoutChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpdateWithWhereUniqueWithoutChildPollInput>;
export const PollDependencyUpdateWithWhereUniqueWithoutChildPollInputObjectZodSchema = makeSchema();
