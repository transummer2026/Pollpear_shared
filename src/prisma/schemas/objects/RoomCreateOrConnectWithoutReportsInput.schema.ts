import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutReportsInputObjectSchema as RoomCreateWithoutReportsInputObjectSchema } from './RoomCreateWithoutReportsInput.schema';
import { RoomUncheckedCreateWithoutReportsInputObjectSchema as RoomUncheckedCreateWithoutReportsInputObjectSchema } from './RoomUncheckedCreateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoomCreateWithoutReportsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutReportsInputObjectSchema)])
}).strict();
export const RoomCreateOrConnectWithoutReportsInputObjectSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateOrConnectWithoutReportsInput>;
export const RoomCreateOrConnectWithoutReportsInputObjectZodSchema = makeSchema();
