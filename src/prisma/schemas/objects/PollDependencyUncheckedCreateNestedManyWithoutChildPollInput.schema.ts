import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyCreateWithoutChildPollInputObjectSchema as PollDependencyCreateWithoutChildPollInputObjectSchema } from './PollDependencyCreateWithoutChildPollInput.schema';
import { PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema as PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema } from './PollDependencyUncheckedCreateWithoutChildPollInput.schema';
import { PollDependencyCreateOrConnectWithoutChildPollInputObjectSchema as PollDependencyCreateOrConnectWithoutChildPollInputObjectSchema } from './PollDependencyCreateOrConnectWithoutChildPollInput.schema';
import { PollDependencyCreateManyChildPollInputEnvelopeObjectSchema as PollDependencyCreateManyChildPollInputEnvelopeObjectSchema } from './PollDependencyCreateManyChildPollInputEnvelope.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollDependencyCreateWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyCreateWithoutChildPollInputObjectSchema).array(), z.lazy(() => PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollDependencyCreateOrConnectWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyCreateOrConnectWithoutChildPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollDependencyCreateManyChildPollInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PollDependencyUncheckedCreateNestedManyWithoutChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedCreateNestedManyWithoutChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedCreateNestedManyWithoutChildPollInput>;
export const PollDependencyUncheckedCreateNestedManyWithoutChildPollInputObjectZodSchema = makeSchema();
