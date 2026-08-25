import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateWithoutRequesterInputObjectSchema as FriendshipCreateWithoutRequesterInputObjectSchema } from './FriendshipCreateWithoutRequesterInput.schema';
import { FriendshipUncheckedCreateWithoutRequesterInputObjectSchema as FriendshipUncheckedCreateWithoutRequesterInputObjectSchema } from './FriendshipUncheckedCreateWithoutRequesterInput.schema';
import { FriendshipCreateOrConnectWithoutRequesterInputObjectSchema as FriendshipCreateOrConnectWithoutRequesterInputObjectSchema } from './FriendshipCreateOrConnectWithoutRequesterInput.schema';
import { FriendshipUpsertWithWhereUniqueWithoutRequesterInputObjectSchema as FriendshipUpsertWithWhereUniqueWithoutRequesterInputObjectSchema } from './FriendshipUpsertWithWhereUniqueWithoutRequesterInput.schema';
import { FriendshipCreateManyRequesterInputEnvelopeObjectSchema as FriendshipCreateManyRequesterInputEnvelopeObjectSchema } from './FriendshipCreateManyRequesterInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithWhereUniqueWithoutRequesterInputObjectSchema as FriendshipUpdateWithWhereUniqueWithoutRequesterInputObjectSchema } from './FriendshipUpdateWithWhereUniqueWithoutRequesterInput.schema';
import { FriendshipUpdateManyWithWhereWithoutRequesterInputObjectSchema as FriendshipUpdateManyWithWhereWithoutRequesterInputObjectSchema } from './FriendshipUpdateManyWithWhereWithoutRequesterInput.schema';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipCreateWithoutRequesterInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutRequesterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutRequesterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutRequesterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyRequesterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutRequesterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FriendshipUpdateManyWithWhereWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipUpdateManyWithWhereWithoutRequesterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FriendshipScalarWhereInputObjectSchema), z.lazy(() => FriendshipScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUncheckedUpdateManyWithoutRequesterNestedInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutRequesterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutRequesterNestedInput>;
export const FriendshipUncheckedUpdateManyWithoutRequesterNestedInputObjectZodSchema = makeSchema();
