import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutCreatedByInputObjectSchema as RoomCreateWithoutCreatedByInputObjectSchema } from './RoomCreateWithoutCreatedByInput.schema';
import { RoomUncheckedCreateWithoutCreatedByInputObjectSchema as RoomUncheckedCreateWithoutCreatedByInputObjectSchema } from './RoomUncheckedCreateWithoutCreatedByInput.schema';
import { RoomCreateOrConnectWithoutCreatedByInputObjectSchema as RoomCreateOrConnectWithoutCreatedByInputObjectSchema } from './RoomCreateOrConnectWithoutCreatedByInput.schema';
import { RoomCreateManyCreatedByInputEnvelopeObjectSchema as RoomCreateManyCreatedByInputEnvelopeObjectSchema } from './RoomCreateManyCreatedByInputEnvelope.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutCreatedByInputObjectSchema), z.lazy(() => RoomCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => RoomUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoomCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => RoomCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoomCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RoomWhereUniqueInputObjectSchema), z.lazy(() => RoomWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RoomUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.RoomUncheckedCreateNestedManyWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUncheckedCreateNestedManyWithoutCreatedByInput>;
export const RoomUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = makeSchema();
