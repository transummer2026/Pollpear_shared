import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutFriendshipsAsUserAInputObjectSchema as UserUpdateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUpdateWithoutFriendshipsAsUserAInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsAsUserAInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsAsUserAInput.schema';
import { UserCreateWithoutFriendshipsAsUserAInputObjectSchema as UserCreateWithoutFriendshipsAsUserAInputObjectSchema } from './UserCreateWithoutFriendshipsAsUserAInput.schema';
import { UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema as UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsAsUserAInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutFriendshipsAsUserAInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsAsUserAInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsAsUserAInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutFriendshipsAsUserAInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutFriendshipsAsUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutFriendshipsAsUserAInput>;
export const UserUpsertWithoutFriendshipsAsUserAInputObjectZodSchema = makeSchema();
