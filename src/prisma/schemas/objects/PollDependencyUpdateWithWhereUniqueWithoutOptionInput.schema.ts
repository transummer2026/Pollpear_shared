import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema';
import { PollDependencyUpdateWithoutOptionInputObjectSchema as PollDependencyUpdateWithoutOptionInputObjectSchema } from './PollDependencyUpdateWithoutOptionInput.schema';
import { PollDependencyUncheckedUpdateWithoutOptionInputObjectSchema as PollDependencyUncheckedUpdateWithoutOptionInputObjectSchema } from './PollDependencyUncheckedUpdateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollDependencyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PollDependencyUpdateWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyUncheckedUpdateWithoutOptionInputObjectSchema)])
}).strict();
export const PollDependencyUpdateWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyUpdateWithWhereUniqueWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpdateWithWhereUniqueWithoutOptionInput>;
export const PollDependencyUpdateWithWhereUniqueWithoutOptionInputObjectZodSchema = makeSchema();
