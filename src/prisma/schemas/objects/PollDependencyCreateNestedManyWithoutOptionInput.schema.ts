import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyCreateWithoutOptionInputObjectSchema as PollDependencyCreateWithoutOptionInputObjectSchema } from './PollDependencyCreateWithoutOptionInput.schema';
import { PollDependencyUncheckedCreateWithoutOptionInputObjectSchema as PollDependencyUncheckedCreateWithoutOptionInputObjectSchema } from './PollDependencyUncheckedCreateWithoutOptionInput.schema';
import { PollDependencyCreateOrConnectWithoutOptionInputObjectSchema as PollDependencyCreateOrConnectWithoutOptionInputObjectSchema } from './PollDependencyCreateOrConnectWithoutOptionInput.schema';
import { PollDependencyCreateManyOptionInputEnvelopeObjectSchema as PollDependencyCreateManyOptionInputEnvelopeObjectSchema } from './PollDependencyCreateManyOptionInputEnvelope.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollDependencyCreateWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyCreateWithoutOptionInputObjectSchema).array(), z.lazy(() => PollDependencyUncheckedCreateWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyUncheckedCreateWithoutOptionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollDependencyCreateOrConnectWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyCreateOrConnectWithoutOptionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollDependencyCreateManyOptionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PollDependencyCreateNestedManyWithoutOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyCreateNestedManyWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateNestedManyWithoutOptionInput>;
export const PollDependencyCreateNestedManyWithoutOptionInputObjectZodSchema = makeSchema();
