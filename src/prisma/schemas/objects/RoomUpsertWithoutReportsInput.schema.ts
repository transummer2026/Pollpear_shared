import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomUpdateWithoutReportsInputObjectSchema as RoomUpdateWithoutReportsInputObjectSchema } from './RoomUpdateWithoutReportsInput.schema';
import { RoomUncheckedUpdateWithoutReportsInputObjectSchema as RoomUncheckedUpdateWithoutReportsInputObjectSchema } from './RoomUncheckedUpdateWithoutReportsInput.schema';
import { RoomCreateWithoutReportsInputObjectSchema as RoomCreateWithoutReportsInputObjectSchema } from './RoomCreateWithoutReportsInput.schema';
import { RoomUncheckedCreateWithoutReportsInputObjectSchema as RoomUncheckedCreateWithoutReportsInputObjectSchema } from './RoomUncheckedCreateWithoutReportsInput.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RoomUpdateWithoutReportsInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutReportsInputObjectSchema)]),
  create: z.union([z.lazy(() => RoomCreateWithoutReportsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutReportsInputObjectSchema)]),
  where: z.lazy(() => RoomWhereInputObjectSchema).optional()
}).strict();
export const RoomUpsertWithoutReportsInputObjectSchema: z.ZodType<Prisma.RoomUpsertWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpsertWithoutReportsInput>;
export const RoomUpsertWithoutReportsInputObjectZodSchema = makeSchema();
