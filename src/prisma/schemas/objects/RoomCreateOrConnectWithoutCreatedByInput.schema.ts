import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutCreatedByInputObjectSchema as RoomCreateWithoutCreatedByInputObjectSchema } from './RoomCreateWithoutCreatedByInput.schema';
import { RoomUncheckedCreateWithoutCreatedByInputObjectSchema as RoomUncheckedCreateWithoutCreatedByInputObjectSchema } from './RoomUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoomCreateWithoutCreatedByInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const RoomCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateOrConnectWithoutCreatedByInput>;
export const RoomCreateOrConnectWithoutCreatedByInputObjectZodSchema = makeSchema();
