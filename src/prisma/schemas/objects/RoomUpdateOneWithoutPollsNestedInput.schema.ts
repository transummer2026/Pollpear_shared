import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutPollsInputObjectSchema as RoomCreateWithoutPollsInputObjectSchema } from './RoomCreateWithoutPollsInput.schema';
import { RoomUncheckedCreateWithoutPollsInputObjectSchema as RoomUncheckedCreateWithoutPollsInputObjectSchema } from './RoomUncheckedCreateWithoutPollsInput.schema';
import { RoomCreateOrConnectWithoutPollsInputObjectSchema as RoomCreateOrConnectWithoutPollsInputObjectSchema } from './RoomCreateOrConnectWithoutPollsInput.schema';
import { RoomUpsertWithoutPollsInputObjectSchema as RoomUpsertWithoutPollsInputObjectSchema } from './RoomUpsertWithoutPollsInput.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateToOneWithWhereWithoutPollsInputObjectSchema as RoomUpdateToOneWithWhereWithoutPollsInputObjectSchema } from './RoomUpdateToOneWithWhereWithoutPollsInput.schema';
import { RoomUpdateWithoutPollsInputObjectSchema as RoomUpdateWithoutPollsInputObjectSchema } from './RoomUpdateWithoutPollsInput.schema';
import { RoomUncheckedUpdateWithoutPollsInputObjectSchema as RoomUncheckedUpdateWithoutPollsInputObjectSchema } from './RoomUncheckedUpdateWithoutPollsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutPollsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutPollsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutPollsInputObjectSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutPollsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => RoomWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => RoomWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoomUpdateToOneWithWhereWithoutPollsInputObjectSchema), z.lazy(() => RoomUpdateWithoutPollsInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutPollsInputObjectSchema)]).optional()
}).strict();
export const RoomUpdateOneWithoutPollsNestedInputObjectSchema: z.ZodType<Prisma.RoomUpdateOneWithoutPollsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateOneWithoutPollsNestedInput>;
export const RoomUpdateOneWithoutPollsNestedInputObjectZodSchema = makeSchema();
