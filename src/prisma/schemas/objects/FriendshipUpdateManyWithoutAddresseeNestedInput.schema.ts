import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateWithoutAddresseeInputObjectSchema as FriendshipCreateWithoutAddresseeInputObjectSchema } from './FriendshipCreateWithoutAddresseeInput.schema';
import { FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema as FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema } from './FriendshipUncheckedCreateWithoutAddresseeInput.schema';
import { FriendshipCreateOrConnectWithoutAddresseeInputObjectSchema as FriendshipCreateOrConnectWithoutAddresseeInputObjectSchema } from './FriendshipCreateOrConnectWithoutAddresseeInput.schema';
import { FriendshipUpsertWithWhereUniqueWithoutAddresseeInputObjectSchema as FriendshipUpsertWithWhereUniqueWithoutAddresseeInputObjectSchema } from './FriendshipUpsertWithWhereUniqueWithoutAddresseeInput.schema';
import { FriendshipCreateManyAddresseeInputEnvelopeObjectSchema as FriendshipCreateManyAddresseeInputEnvelopeObjectSchema } from './FriendshipCreateManyAddresseeInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema';
import { FriendshipUpdateWithWhereUniqueWithoutAddresseeInputObjectSchema as FriendshipUpdateWithWhereUniqueWithoutAddresseeInputObjectSchema } from './FriendshipUpdateWithWhereUniqueWithoutAddresseeInput.schema';
import { FriendshipUpdateManyWithWhereWithoutAddresseeInputObjectSchema as FriendshipUpdateManyWithWhereWithoutAddresseeInputObjectSchema } from './FriendshipUpdateManyWithWhereWithoutAddresseeInput.schema';
import { FriendshipScalarWhereInputObjectSchema as FriendshipScalarWhereInputObjectSchema } from './FriendshipScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipCreateWithoutAddresseeInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutAddresseeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipUpsertWithWhereUniqueWithoutAddresseeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyAddresseeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipUpdateWithWhereUniqueWithoutAddresseeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FriendshipUpdateManyWithWhereWithoutAddresseeInputObjectSchema), z.lazy(() => FriendshipUpdateManyWithWhereWithoutAddresseeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FriendshipScalarWhereInputObjectSchema), z.lazy(() => FriendshipScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUpdateManyWithoutAddresseeNestedInputObjectSchema: z.ZodType<Prisma.FriendshipUpdateManyWithoutAddresseeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUpdateManyWithoutAddresseeNestedInput>;
export const FriendshipUpdateManyWithoutAddresseeNestedInputObjectZodSchema = makeSchema();
