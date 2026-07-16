import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutPollsInputObjectSchema as RoomCreateWithoutPollsInputObjectSchema } from './RoomCreateWithoutPollsInput.schema';
import { RoomUncheckedCreateWithoutPollsInputObjectSchema as RoomUncheckedCreateWithoutPollsInputObjectSchema } from './RoomUncheckedCreateWithoutPollsInput.schema';
import { RoomCreateOrConnectWithoutPollsInputObjectSchema as RoomCreateOrConnectWithoutPollsInputObjectSchema } from './RoomCreateOrConnectWithoutPollsInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutPollsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutPollsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutPollsInputObjectSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional()
}).strict();
export const RoomCreateNestedOneWithoutPollsInputObjectSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutPollsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateNestedOneWithoutPollsInput>;
export const RoomCreateNestedOneWithoutPollsInputObjectZodSchema = makeSchema();
