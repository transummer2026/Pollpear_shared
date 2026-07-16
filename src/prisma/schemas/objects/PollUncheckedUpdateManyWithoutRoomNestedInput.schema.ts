import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutRoomInputObjectSchema as PollCreateWithoutRoomInputObjectSchema } from './PollCreateWithoutRoomInput.schema';
import { PollUncheckedCreateWithoutRoomInputObjectSchema as PollUncheckedCreateWithoutRoomInputObjectSchema } from './PollUncheckedCreateWithoutRoomInput.schema';
import { PollCreateOrConnectWithoutRoomInputObjectSchema as PollCreateOrConnectWithoutRoomInputObjectSchema } from './PollCreateOrConnectWithoutRoomInput.schema';
import { PollUpsertWithWhereUniqueWithoutRoomInputObjectSchema as PollUpsertWithWhereUniqueWithoutRoomInputObjectSchema } from './PollUpsertWithWhereUniqueWithoutRoomInput.schema';
import { PollCreateManyRoomInputEnvelopeObjectSchema as PollCreateManyRoomInputEnvelopeObjectSchema } from './PollCreateManyRoomInputEnvelope.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateWithWhereUniqueWithoutRoomInputObjectSchema as PollUpdateWithWhereUniqueWithoutRoomInputObjectSchema } from './PollUpdateWithWhereUniqueWithoutRoomInput.schema';
import { PollUpdateManyWithWhereWithoutRoomInputObjectSchema as PollUpdateManyWithWhereWithoutRoomInputObjectSchema } from './PollUpdateManyWithWhereWithoutRoomInput.schema';
import { PollScalarWhereInputObjectSchema as PollScalarWhereInputObjectSchema } from './PollScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutRoomInputObjectSchema), z.lazy(() => PollCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => PollUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => PollCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PollUpsertWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => PollUpsertWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollCreateManyRoomInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PollUpdateWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => PollUpdateWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PollUpdateManyWithWhereWithoutRoomInputObjectSchema), z.lazy(() => PollUpdateManyWithWhereWithoutRoomInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PollScalarWhereInputObjectSchema), z.lazy(() => PollScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PollUncheckedUpdateManyWithoutRoomNestedInputObjectSchema: z.ZodType<Prisma.PollUncheckedUpdateManyWithoutRoomNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUncheckedUpdateManyWithoutRoomNestedInput>;
export const PollUncheckedUpdateManyWithoutRoomNestedInputObjectZodSchema = makeSchema();
