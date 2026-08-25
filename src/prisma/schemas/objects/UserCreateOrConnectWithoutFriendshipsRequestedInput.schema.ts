import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFriendshipsRequestedInputObjectSchema as UserCreateWithoutFriendshipsRequestedInputObjectSchema } from './UserCreateWithoutFriendshipsRequestedInput.schema';
import { UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema as UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsRequestedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsRequestedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutFriendshipsRequestedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFriendshipsRequestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutFriendshipsRequestedInput>;
export const UserCreateOrConnectWithoutFriendshipsRequestedInputObjectZodSchema = makeSchema();
