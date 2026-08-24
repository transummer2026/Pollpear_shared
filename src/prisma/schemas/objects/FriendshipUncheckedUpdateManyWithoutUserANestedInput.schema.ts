import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateWithoutUserAInputObjectSchema as FriendshipCreateWithoutUserAInputObjectSchema } from './FriendshipCreateWithoutUserAInput.schema';
import { FriendshipUncheckedCreateWithoutUserAInputObjectSchema as FriendshipUncheckedCreateWithoutUserAInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserAInput.schema';
import { FriendshipCreateOrConnectWithoutUserAInputObjectSchema as FriendshipCreateOrConnectWithoutUserAInputObjectSchema } from './FriendshipCreateOrConnectWithoutUserAInput.schema';
import { FriendshipUpsertWithWhereUniqueWithoutUserAInputObjectSchema as FriendshipUpsertWithWhereUniqueWithoutUserAInputObjectSchema } from './FriendshipUpsertWithWhereUniqueWithoutUserAInput.schema';
import { FriendshipCreateManyUserAInputEnvelopeObjectSchema as FriendshipCreateManyUserAInputEnvelopeObjectSchema } from './FriendshipCreateManyUserAInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithWhereUniqueWithoutUserAInputObjectSchema as FriendshipUpdateWithWhereUniqueWithoutUserAInputObjectSchema } from './FriendshipUpdateWithWhereUniqueWithoutUserAInput.schema';
import { FriendshipUpdateManyWithWhereWithoutUserAInputObjectSchema as FriendshipUpdateManyWithWhereWithoutUserAInputObjectSchema } from './FriendshipUpdateManyWithWhereWithoutUserAInput.schema';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserAInputObjectSchema), z.lazy(() => FriendshipCreateWithoutUserAInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutUserAInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserAInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutUserAInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutUserAInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutUserAInputObjectSchema), z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutUserAInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyUserAInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutUserAInputObjectSchema), z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutUserAInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FriendshipUpdateManyWithWhereWithoutUserAInputObjectSchema), z.lazy(() => FriendshipUpdateManyWithWhereWithoutUserAInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FriendshipScalarWhereInputObjectSchema), z.lazy(() => FriendshipScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUncheckedUpdateManyWithoutUserANestedInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutUserANestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutUserANestedInput>;
export const FriendshipUncheckedUpdateManyWithoutUserANestedInputObjectZodSchema = makeSchema();
