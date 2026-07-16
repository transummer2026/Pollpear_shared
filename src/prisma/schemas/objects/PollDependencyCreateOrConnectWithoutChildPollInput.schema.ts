import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema';
import { PollDependencyCreateWithoutChildPollInputObjectSchema as PollDependencyCreateWithoutChildPollInputObjectSchema } from './PollDependencyCreateWithoutChildPollInput.schema';
import { PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema as PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema } from './PollDependencyUncheckedCreateWithoutChildPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollDependencyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollDependencyCreateWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema)])
}).strict();
export const PollDependencyCreateOrConnectWithoutChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyCreateOrConnectWithoutChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateOrConnectWithoutChildPollInput>;
export const PollDependencyCreateOrConnectWithoutChildPollInputObjectZodSchema = makeSchema();
