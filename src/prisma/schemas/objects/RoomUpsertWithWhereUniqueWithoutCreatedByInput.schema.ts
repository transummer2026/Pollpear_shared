import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithoutCreatedByInputObjectSchema as RoomUpdateWithoutCreatedByInputObjectSchema } from './RoomUpdateWithoutCreatedByInput.schema';
import { RoomUncheckedUpdateWithoutCreatedByInputObjectSchema as RoomUncheckedUpdateWithoutCreatedByInputObjectSchema } from './RoomUncheckedUpdateWithoutCreatedByInput.schema';
import { RoomCreateWithoutCreatedByInputObjectSchema as RoomCreateWithoutCreatedByInputObjectSchema } from './RoomCreateWithoutCreatedByInput.schema';
import { RoomUncheckedCreateWithoutCreatedByInputObjectSchema as RoomUncheckedCreateWithoutCreatedByInputObjectSchema } from './RoomUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RoomUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => RoomCreateWithoutCreatedByInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const RoomUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutCreatedByInput>;
export const RoomUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
