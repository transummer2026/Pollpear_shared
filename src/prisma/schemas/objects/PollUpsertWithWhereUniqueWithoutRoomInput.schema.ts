import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateWithoutRoomInputObjectSchema as PollUpdateWithoutRoomInputObjectSchema } from './PollUpdateWithoutRoomInput.schema';
import { PollUncheckedUpdateWithoutRoomInputObjectSchema as PollUncheckedUpdateWithoutRoomInputObjectSchema } from './PollUncheckedUpdateWithoutRoomInput.schema';
import { PollCreateWithoutRoomInputObjectSchema as PollCreateWithoutRoomInputObjectSchema } from './PollCreateWithoutRoomInput.schema';
import { PollUncheckedCreateWithoutRoomInputObjectSchema as PollUncheckedCreateWithoutRoomInputObjectSchema } from './PollUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PollUpdateWithoutRoomInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutRoomInputObjectSchema)]),
  create: z.union([z.lazy(() => PollCreateWithoutRoomInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const PollUpsertWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.PollUpsertWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpsertWithWhereUniqueWithoutRoomInput>;
export const PollUpsertWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
