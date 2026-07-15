import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema';
import { PollDependencyCreateWithoutOptionInputObjectSchema as PollDependencyCreateWithoutOptionInputObjectSchema } from './PollDependencyCreateWithoutOptionInput.schema';
import { PollDependencyUncheckedCreateWithoutOptionInputObjectSchema as PollDependencyUncheckedCreateWithoutOptionInputObjectSchema } from './PollDependencyUncheckedCreateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollDependencyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollDependencyCreateWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyUncheckedCreateWithoutOptionInputObjectSchema)])
}).strict();
export const PollDependencyCreateOrConnectWithoutOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyCreateOrConnectWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateOrConnectWithoutOptionInput>;
export const PollDependencyCreateOrConnectWithoutOptionInputObjectZodSchema = makeSchema();
