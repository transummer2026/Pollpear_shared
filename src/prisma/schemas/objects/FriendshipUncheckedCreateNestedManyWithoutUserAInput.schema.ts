import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateWithoutUserAInputObjectSchema as FriendshipCreateWithoutUserAInputObjectSchema } from './FriendshipCreateWithoutUserAInput.schema';
import { FriendshipUncheckedCreateWithoutUserAInputObjectSchema as FriendshipUncheckedCreateWithoutUserAInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserAInput.schema';
import { FriendshipCreateOrConnectWithoutUserAInputObjectSchema as FriendshipCreateOrConnectWithoutUserAInputObjectSchema } from './FriendshipCreateOrConnectWithoutUserAInput.schema';
import { FriendshipCreateManyUserAInputEnvelopeObjectSchema as FriendshipCreateManyUserAInputEnvelopeObjectSchema } from './FriendshipCreateManyUserAInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserAInputObjectSchema), z.lazy(() => FriendshipCreateWithoutUserAInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutUserAInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserAInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutUserAInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutUserAInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyUserAInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipUncheckedCreateNestedManyWithoutUserAInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedCreateNestedManyWithoutUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedCreateNestedManyWithoutUserAInput>;
export const FriendshipUncheckedCreateNestedManyWithoutUserAInputObjectZodSchema = makeSchema();
