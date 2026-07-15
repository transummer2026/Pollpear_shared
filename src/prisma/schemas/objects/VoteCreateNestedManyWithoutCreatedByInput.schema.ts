import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateWithoutCreatedByInputObjectSchema as VoteCreateWithoutCreatedByInputObjectSchema } from './VoteCreateWithoutCreatedByInput.schema';
import { VoteUncheckedCreateWithoutCreatedByInputObjectSchema as VoteUncheckedCreateWithoutCreatedByInputObjectSchema } from './VoteUncheckedCreateWithoutCreatedByInput.schema';
import { VoteCreateOrConnectWithoutCreatedByInputObjectSchema as VoteCreateOrConnectWithoutCreatedByInputObjectSchema } from './VoteCreateOrConnectWithoutCreatedByInput.schema';
import { VoteCreateManyCreatedByInputEnvelopeObjectSchema as VoteCreateManyCreatedByInputEnvelopeObjectSchema } from './VoteCreateManyCreatedByInputEnvelope.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => VoteCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => VoteUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VoteCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => VoteCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VoteCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VoteCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.VoteCreateNestedManyWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateNestedManyWithoutCreatedByInput>;
export const VoteCreateNestedManyWithoutCreatedByInputObjectZodSchema = makeSchema();
