import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutRoomInputObjectSchema as PollCreateWithoutRoomInputObjectSchema } from './PollCreateWithoutRoomInput.schema';
import { PollUncheckedCreateWithoutRoomInputObjectSchema as PollUncheckedCreateWithoutRoomInputObjectSchema } from './PollUncheckedCreateWithoutRoomInput.schema';
import { PollCreateOrConnectWithoutRoomInputObjectSchema as PollCreateOrConnectWithoutRoomInputObjectSchema } from './PollCreateOrConnectWithoutRoomInput.schema';
import { PollCreateManyRoomInputEnvelopeObjectSchema as PollCreateManyRoomInputEnvelopeObjectSchema } from './PollCreateManyRoomInputEnvelope.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutRoomInputObjectSchema), z.lazy(() => PollCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => PollUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => PollCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollCreateManyRoomInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PollCreateNestedManyWithoutRoomInputObjectSchema: z.ZodType<Prisma.PollCreateNestedManyWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateNestedManyWithoutRoomInput>;
export const PollCreateNestedManyWithoutRoomInputObjectZodSchema = makeSchema();
