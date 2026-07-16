import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationCreateWithoutRoomInputObjectSchema as InvitationCreateWithoutRoomInputObjectSchema } from './InvitationCreateWithoutRoomInput.schema';
import { InvitationUncheckedCreateWithoutRoomInputObjectSchema as InvitationUncheckedCreateWithoutRoomInputObjectSchema } from './InvitationUncheckedCreateWithoutRoomInput.schema';
import { InvitationCreateOrConnectWithoutRoomInputObjectSchema as InvitationCreateOrConnectWithoutRoomInputObjectSchema } from './InvitationCreateOrConnectWithoutRoomInput.schema';
import { InvitationUpsertWithWhereUniqueWithoutRoomInputObjectSchema as InvitationUpsertWithWhereUniqueWithoutRoomInputObjectSchema } from './InvitationUpsertWithWhereUniqueWithoutRoomInput.schema';
import { InvitationCreateManyRoomInputEnvelopeObjectSchema as InvitationCreateManyRoomInputEnvelopeObjectSchema } from './InvitationCreateManyRoomInputEnvelope.schema';
import { InvitationWhereUniqueInputObjectSchema as InvitationWhereUniqueInputObjectSchema } from './InvitationWhereUniqueInput.schema';
import { InvitationUpdateWithWhereUniqueWithoutRoomInputObjectSchema as InvitationUpdateWithWhereUniqueWithoutRoomInputObjectSchema } from './InvitationUpdateWithWhereUniqueWithoutRoomInput.schema';
import { InvitationUpdateManyWithWhereWithoutRoomInputObjectSchema as InvitationUpdateManyWithWhereWithoutRoomInputObjectSchema } from './InvitationUpdateManyWithWhereWithoutRoomInput.schema';
import { InvitationScalarWhereInputObjectSchema as InvitationScalarWhereInputObjectSchema } from './InvitationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InvitationCreateWithoutRoomInputObjectSchema), z.lazy(() => InvitationCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => InvitationUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => InvitationUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InvitationCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => InvitationCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InvitationUpsertWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => InvitationUpsertWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InvitationCreateManyRoomInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InvitationWhereUniqueInputObjectSchema), z.lazy(() => InvitationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InvitationUpdateWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => InvitationUpdateWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InvitationUpdateManyWithWhereWithoutRoomInputObjectSchema), z.lazy(() => InvitationUpdateManyWithWhereWithoutRoomInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InvitationScalarWhereInputObjectSchema), z.lazy(() => InvitationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InvitationUncheckedUpdateManyWithoutRoomNestedInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutRoomNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedUpdateManyWithoutRoomNestedInput>;
export const InvitationUncheckedUpdateManyWithoutRoomNestedInputObjectZodSchema = makeSchema();
