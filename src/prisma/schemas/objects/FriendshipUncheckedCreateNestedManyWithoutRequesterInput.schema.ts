import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateWithoutRequesterInputObjectSchema as FriendshipCreateWithoutRequesterInputObjectSchema } from './FriendshipCreateWithoutRequesterInput.schema';
import { FriendshipUncheckedCreateWithoutRequesterInputObjectSchema as FriendshipUncheckedCreateWithoutRequesterInputObjectSchema } from './FriendshipUncheckedCreateWithoutRequesterInput.schema';
import { FriendshipCreateOrConnectWithoutRequesterInputObjectSchema as FriendshipCreateOrConnectWithoutRequesterInputObjectSchema } from './FriendshipCreateOrConnectWithoutRequesterInput.schema';
import { FriendshipCreateManyRequesterInputEnvelopeObjectSchema as FriendshipCreateManyRequesterInputEnvelopeObjectSchema } from './FriendshipCreateManyRequesterInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipCreateWithoutRequesterInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutRequesterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutRequesterInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutRequesterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyRequesterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUncheckedCreateNestedManyWithoutRequesterInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedCreateNestedManyWithoutRequesterInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedCreateNestedManyWithoutRequesterInput>;
export const FriendshipUncheckedCreateNestedManyWithoutRequesterInputObjectZodSchema = makeSchema();
