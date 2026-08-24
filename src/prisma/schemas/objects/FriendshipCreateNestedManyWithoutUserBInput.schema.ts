import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipCreateWithoutUserBInputObjectSchema as FriendshipCreateWithoutUserBInputObjectSchema } from './FriendshipCreateWithoutUserBInput.schema';
import { FriendshipUncheckedCreateWithoutUserBInputObjectSchema as FriendshipUncheckedCreateWithoutUserBInputObjectSchema } from './FriendshipUncheckedCreateWithoutUserBInput.schema';
import { FriendshipCreateOrConnectWithoutUserBInputObjectSchema as FriendshipCreateOrConnectWithoutUserBInputObjectSchema } from './FriendshipCreateOrConnectWithoutUserBInput.schema';
import { FriendshipCreateManyUserBInputEnvelopeObjectSchema as FriendshipCreateManyUserBInputEnvelopeObjectSchema } from './FriendshipCreateManyUserBInputEnvelope.schema';
import { FriendshipWhereUniqueInputObjectSchema as FriendshipWhereUniqueInputObjectSchema } from './FriendshipWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FriendshipCreateWithoutUserBInputObjectSchema), z.lazy(() => FriendshipCreateWithoutUserBInputObjectSchema).array(), z.lazy(() => FriendshipUncheckedCreateWithoutUserBInputObjectSchema), z.lazy(() => FriendshipUncheckedCreateWithoutUserBInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FriendshipCreateOrConnectWithoutUserBInputObjectSchema), z.lazy(() => FriendshipCreateOrConnectWithoutUserBInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FriendshipCreateManyUserBInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FriendshipWhereUniqueInputObjectSchema), z.lazy(() => FriendshipWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FriendshipCreateNestedManyWithoutUserBInputObjectSchema: z.ZodType<Prisma.FriendshipCreateNestedManyWithoutUserBInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateNestedManyWithoutUserBInput>;
export const FriendshipCreateNestedManyWithoutUserBInputObjectZodSchema = makeSchema();
