import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutFriendshipsRequestedInputObjectSchema as UserCreateWithoutFriendshipsRequestedInputObjectSchema } from './UserCreateWithoutFriendshipsRequestedInput.schema';
import { UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema as UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsRequestedInput.schema';
import { UserCreateOrConnectWithoutFriendshipsRequestedInputObjectSchema as UserCreateOrConnectWithoutFriendshipsRequestedInputObjectSchema } from './UserCreateOrConnectWithoutFriendshipsRequestedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsRequestedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFriendshipsRequestedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutFriendshipsRequestedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFriendshipsRequestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutFriendshipsRequestedInput>;
export const UserCreateNestedOneWithoutFriendshipsRequestedInputObjectZodSchema = makeSchema();
