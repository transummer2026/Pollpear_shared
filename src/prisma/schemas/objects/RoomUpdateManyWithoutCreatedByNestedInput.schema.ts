import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutCreatedByInputObjectSchema as RoomCreateWithoutCreatedByInputObjectSchema } from './RoomCreateWithoutCreatedByInput.schema';
import { RoomUncheckedCreateWithoutCreatedByInputObjectSchema as RoomUncheckedCreateWithoutCreatedByInputObjectSchema } from './RoomUncheckedCreateWithoutCreatedByInput.schema';
import { RoomCreateOrConnectWithoutCreatedByInputObjectSchema as RoomCreateOrConnectWithoutCreatedByInputObjectSchema } from './RoomCreateOrConnectWithoutCreatedByInput.schema';
import { RoomUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema as RoomUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './RoomUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { RoomCreateManyCreatedByInputEnvelopeObjectSchema as RoomCreateManyCreatedByInputEnvelopeObjectSchema } from './RoomCreateManyCreatedByInputEnvelope.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema as RoomUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './RoomUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { RoomUpdateManyWithWhereWithoutCreatedByInputObjectSchema as RoomUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './RoomUpdateManyWithWhereWithoutCreatedByInput.schema';
import { RoomScalarWhereInputObjectSchema as RoomScalarWhereInputObjectSchema } from './RoomScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutCreatedByInputObjectSchema), z.lazy(() => RoomCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => RoomUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoomCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => RoomCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RoomUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => RoomUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoomCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RoomWhereUniqueInputObjectSchema), z.lazy(() => RoomWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RoomWhereUniqueInputObjectSchema), z.lazy(() => RoomWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RoomWhereUniqueInputObjectSchema), z.lazy(() => RoomWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RoomWhereUniqueInputObjectSchema), z.lazy(() => RoomWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RoomUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => RoomUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RoomUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => RoomUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RoomScalarWhereInputObjectSchema), z.lazy(() => RoomScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RoomUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.RoomUpdateManyWithoutCreatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateManyWithoutCreatedByNestedInput>;
export const RoomUpdateManyWithoutCreatedByNestedInputObjectZodSchema = makeSchema();
