import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutCreatedByInputObjectSchema as PollCreateWithoutCreatedByInputObjectSchema } from './PollCreateWithoutCreatedByInput.schema';
import { PollUncheckedCreateWithoutCreatedByInputObjectSchema as PollUncheckedCreateWithoutCreatedByInputObjectSchema } from './PollUncheckedCreateWithoutCreatedByInput.schema';
import { PollCreateOrConnectWithoutCreatedByInputObjectSchema as PollCreateOrConnectWithoutCreatedByInputObjectSchema } from './PollCreateOrConnectWithoutCreatedByInput.schema';
import { PollCreateManyCreatedByInputEnvelopeObjectSchema as PollCreateManyCreatedByInputEnvelopeObjectSchema } from './PollCreateManyCreatedByInputEnvelope.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PollCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => PollUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => PollCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PollUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PollUncheckedCreateNestedManyWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUncheckedCreateNestedManyWithoutCreatedByInput>;
export const PollUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = makeSchema();
