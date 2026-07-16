import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateWithoutRoomInputObjectSchema as PollUpdateWithoutRoomInputObjectSchema } from './PollUpdateWithoutRoomInput.schema';
import { PollUncheckedUpdateWithoutRoomInputObjectSchema as PollUncheckedUpdateWithoutRoomInputObjectSchema } from './PollUncheckedUpdateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PollUpdateWithoutRoomInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutRoomInputObjectSchema)])
}).strict();
export const PollUpdateWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.PollUpdateWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateWithWhereUniqueWithoutRoomInput>;
export const PollUpdateWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
