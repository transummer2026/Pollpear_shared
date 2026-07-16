import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutFriendshipsRequestedInputObjectSchema as UserUpdateWithoutFriendshipsRequestedInputObjectSchema } from './UserUpdateWithoutFriendshipsRequestedInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsRequestedInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsRequestedInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsRequestedInput.schema';
import { UserCreateWithoutFriendshipsRequestedInputObjectSchema as UserCreateWithoutFriendshipsRequestedInputObjectSchema } from './UserCreateWithoutFriendshipsRequestedInput.schema';
import { UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema as UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsRequestedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutFriendshipsRequestedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsRequestedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsRequestedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutFriendshipsRequestedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutFriendshipsRequestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutFriendshipsRequestedInput>;
export const UserUpsertWithoutFriendshipsRequestedInputObjectZodSchema = makeSchema();
