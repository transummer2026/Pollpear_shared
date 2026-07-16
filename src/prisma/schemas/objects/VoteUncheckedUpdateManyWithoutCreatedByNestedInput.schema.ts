import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateWithoutCreatedByInputObjectSchema as VoteCreateWithoutCreatedByInputObjectSchema } from './VoteCreateWithoutCreatedByInput.schema';
import { VoteUncheckedCreateWithoutCreatedByInputObjectSchema as VoteUncheckedCreateWithoutCreatedByInputObjectSchema } from './VoteUncheckedCreateWithoutCreatedByInput.schema';
import { VoteCreateOrConnectWithoutCreatedByInputObjectSchema as VoteCreateOrConnectWithoutCreatedByInputObjectSchema } from './VoteCreateOrConnectWithoutCreatedByInput.schema';
import { VoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema as VoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './VoteUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { VoteCreateManyCreatedByInputEnvelopeObjectSchema as VoteCreateManyCreatedByInputEnvelopeObjectSchema } from './VoteCreateManyCreatedByInputEnvelope.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema as VoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './VoteUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { VoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema as VoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './VoteUpdateManyWithWhereWithoutCreatedByInput.schema';
import { VoteScalarWhereInputObjectSchema as VoteScalarWhereInputObjectSchema } from './VoteScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => VoteCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => VoteUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VoteCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => VoteCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => VoteUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VoteCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => VoteUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => VoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VoteScalarWhereInputObjectSchema), z.lazy(() => VoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.VoteUncheckedUpdateManyWithoutCreatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUncheckedUpdateManyWithoutCreatedByNestedInput>;
export const VoteUncheckedUpdateManyWithoutCreatedByNestedInputObjectZodSchema = makeSchema();
