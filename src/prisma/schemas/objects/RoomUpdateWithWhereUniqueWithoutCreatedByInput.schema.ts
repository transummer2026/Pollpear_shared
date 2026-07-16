import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithoutCreatedByInputObjectSchema as RoomUpdateWithoutCreatedByInputObjectSchema } from './RoomUpdateWithoutCreatedByInput.schema';
import { RoomUncheckedUpdateWithoutCreatedByInputObjectSchema as RoomUncheckedUpdateWithoutCreatedByInputObjectSchema } from './RoomUncheckedUpdateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RoomUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const RoomUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutCreatedByInput>;
export const RoomUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
