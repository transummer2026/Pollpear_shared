import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutFriendshipsReceivedInputObjectSchema as UserCreateWithoutFriendshipsReceivedInputObjectSchema } from './UserCreateWithoutFriendshipsReceivedInput.schema';
import { UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema as UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsReceivedInput.schema';
import { UserCreateOrConnectWithoutFriendshipsReceivedInputObjectSchema as UserCreateOrConnectWithoutFriendshipsReceivedInputObjectSchema } from './UserCreateOrConnectWithoutFriendshipsReceivedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFriendshipsReceivedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutFriendshipsReceivedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFriendshipsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutFriendshipsReceivedInput>;
export const UserCreateNestedOneWithoutFriendshipsReceivedInputObjectZodSchema = makeSchema();
