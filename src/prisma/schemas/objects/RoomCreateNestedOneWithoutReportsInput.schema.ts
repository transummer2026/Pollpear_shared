import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutReportsInputObjectSchema as RoomCreateWithoutReportsInputObjectSchema } from './RoomCreateWithoutReportsInput.schema';
import { RoomUncheckedCreateWithoutReportsInputObjectSchema as RoomUncheckedCreateWithoutReportsInputObjectSchema } from './RoomUncheckedCreateWithoutReportsInput.schema';
import { RoomCreateOrConnectWithoutReportsInputObjectSchema as RoomCreateOrConnectWithoutReportsInputObjectSchema } from './RoomCreateOrConnectWithoutReportsInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutReportsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional()
}).strict();
export const RoomCreateNestedOneWithoutReportsInputObjectSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateNestedOneWithoutReportsInput>;
export const RoomCreateNestedOneWithoutReportsInputObjectZodSchema = makeSchema();
