import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutPollsInputObjectSchema as RoomCreateWithoutPollsInputObjectSchema } from './RoomCreateWithoutPollsInput.schema';
import { RoomUncheckedCreateWithoutPollsInputObjectSchema as RoomUncheckedCreateWithoutPollsInputObjectSchema } from './RoomUncheckedCreateWithoutPollsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoomCreateWithoutPollsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutPollsInputObjectSchema)])
}).strict();
export const RoomCreateOrConnectWithoutPollsInputObjectSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutPollsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateOrConnectWithoutPollsInput>;
export const RoomCreateOrConnectWithoutPollsInputObjectZodSchema = makeSchema();
