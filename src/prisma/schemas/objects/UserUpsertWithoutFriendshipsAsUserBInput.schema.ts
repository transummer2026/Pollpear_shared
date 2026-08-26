import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutFriendshipsAsUserBInputObjectSchema as UserUpdateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUpdateWithoutFriendshipsAsUserBInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsAsUserBInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsAsUserBInput.schema';
import { UserCreateWithoutFriendshipsAsUserBInputObjectSchema as UserCreateWithoutFriendshipsAsUserBInputObjectSchema } from './UserCreateWithoutFriendshipsAsUserBInput.schema';
import { UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema as UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsAsUserBInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutFriendshipsAsUserBInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsAsUserBInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsAsUserBInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutFriendshipsAsUserBInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutFriendshipsAsUserBInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutFriendshipsAsUserBInput>;
export const UserUpsertWithoutFriendshipsAsUserBInputObjectZodSchema = makeSchema();
