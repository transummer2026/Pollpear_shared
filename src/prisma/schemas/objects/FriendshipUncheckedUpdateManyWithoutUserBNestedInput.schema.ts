import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateWithoutUserBInputObjectSchema as FriendshipCreateWithoutUserBInputObjectSchema } from './FriendshipCreateWithoutUserBInput.schema';
import { FriendshipUncheckedCreateWithoutUserBInputObjectSchema as FriendshipUncheckedCreateWithoutUserBInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserBInput.schema';
import { FriendshipCreateOrConnectWithoutUserBInputObjectSchema as FriendshipCreateOrConnectWithoutUserBInputObjectSchema } from './FriendshipCreateOrConnectWithoutUserBInput.schema';
import { FriendshipUpsertWithWhereUniqueWithoutUserBInputObjectSchema as FriendshipUpsertWithWhereUniqueWithoutUserBInputObjectSchema } from './FriendshipUpsertWithWhereUniqueWithoutUserBInput.schema';
import { FriendshipCreateManyUserBInputEnvelopeObjectSchema as FriendshipCreateManyUserBInputEnvelopeObjectSchema } from './FriendshipCreateManyUserBInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithWhereUniqueWithoutUserBInputObjectSchema as FriendshipUpdateWithWhereUniqueWithoutUserBInputObjectSchema } from './FriendshipUpdateWithWhereUniqueWithoutUserBInput.schema';
import { FriendshipUpdateManyWithWhereWithoutUserBInputObjectSchema as FriendshipUpdateManyWithWhereWithoutUserBInputObjectSchema } from './FriendshipUpdateManyWithWhereWithoutUserBInput.schema';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserBInputObjectSchema), z.lazy(() => FriendshipCreateWithoutUserBInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutUserBInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserBInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutUserBInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutUserBInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutUserBInputObjectSchema), z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutUserBInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyUserBInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutUserBInputObjectSchema), z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutUserBInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FriendshipUpdateManyWithWhereWithoutUserBInputObjectSchema), z.lazy(() => FriendshipUpdateManyWithWhereWithoutUserBInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FriendshipScalarWhereInputObjectSchema), z.lazy(() => FriendshipScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUncheckedUpdateManyWithoutUserBNestedInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutUserBNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedUpdateManyWithoutUserBNestedInput>;
export const FriendshipUncheckedUpdateManyWithoutUserBNestedInputObjectZodSchema = makeSchema();
