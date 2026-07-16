import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutReportsInputObjectSchema as RoomCreateWithoutReportsInputObjectSchema } from './RoomCreateWithoutReportsInput.schema';
import { RoomUncheckedCreateWithoutReportsInputObjectSchema as RoomUncheckedCreateWithoutReportsInputObjectSchema } from './RoomUncheckedCreateWithoutReportsInput.schema';
import { RoomCreateOrConnectWithoutReportsInputObjectSchema as RoomCreateOrConnectWithoutReportsInputObjectSchema } from './RoomCreateOrConnectWithoutReportsInput.schema';
import { RoomUpsertWithoutReportsInputObjectSchema as RoomUpsertWithoutReportsInputObjectSchema } from './RoomUpsertWithoutReportsInput.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateToOneWithWhereWithoutReportsInputObjectSchema as RoomUpdateToOneWithWhereWithoutReportsInputObjectSchema } from './RoomUpdateToOneWithWhereWithoutReportsInput.schema';
import { RoomUpdateWithoutReportsInputObjectSchema as RoomUpdateWithoutReportsInputObjectSchema } from './RoomUpdateWithoutReportsInput.schema';
import { RoomUncheckedUpdateWithoutReportsInputObjectSchema as RoomUncheckedUpdateWithoutReportsInputObjectSchema } from './RoomUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutReportsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutReportsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => RoomWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => RoomWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoomUpdateToOneWithWhereWithoutReportsInputObjectSchema), z.lazy(() => RoomUpdateWithoutReportsInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutReportsInputObjectSchema)]).optional()
}).strict();
export const RoomUpdateOneWithoutReportsNestedInputObjectSchema: z.ZodType<Prisma.RoomUpdateOneWithoutReportsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateOneWithoutReportsNestedInput>;
export const RoomUpdateOneWithoutReportsNestedInputObjectZodSchema = makeSchema();
