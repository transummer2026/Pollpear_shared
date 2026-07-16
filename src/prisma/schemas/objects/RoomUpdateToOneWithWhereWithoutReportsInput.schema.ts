import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { RoomUpdateWithoutReportsInputObjectSchema as RoomUpdateWithoutReportsInputObjectSchema } from './RoomUpdateWithoutReportsInput.schema';
import { RoomUncheckedUpdateWithoutReportsInputObjectSchema as RoomUncheckedUpdateWithoutReportsInputObjectSchema } from './RoomUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoomUpdateWithoutReportsInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutReportsInputObjectSchema)])
}).strict();
export const RoomUpdateToOneWithWhereWithoutReportsInputObjectSchema: z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutReportsInput>;
export const RoomUpdateToOneWithWhereWithoutReportsInputObjectZodSchema = makeSchema();
