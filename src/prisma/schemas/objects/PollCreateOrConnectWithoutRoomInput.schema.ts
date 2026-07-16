import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollCreateWithoutRoomInputObjectSchema as PollCreateWithoutRoomInputObjectSchema } from './PollCreateWithoutRoomInput.schema';
import { PollUncheckedCreateWithoutRoomInputObjectSchema as PollUncheckedCreateWithoutRoomInputObjectSchema } from './PollUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollCreateWithoutRoomInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const PollCreateOrConnectWithoutRoomInputObjectSchema: z.ZodType<Prisma.PollCreateOrConnectWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateOrConnectWithoutRoomInput>;
export const PollCreateOrConnectWithoutRoomInputObjectZodSchema = makeSchema();
