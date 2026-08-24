import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutFriendshipsAsUserAInputObjectSchema as UserCreateWithoutFriendshipsAsUserAInputObjectSchema } from './UserCreateWithoutFriendshipsAsUserAInput.schema';
import { UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema as UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsAsUserAInput.schema';
import { UserCreateOrConnectWithoutFriendshipsAsUserAInputObjectSchema as UserCreateOrConnectWithoutFriendshipsAsUserAInputObjectSchema } from './UserCreateOrConnectWithoutFriendshipsAsUserAInput.schema';
import { UserUpsertWithoutFriendshipsAsUserAInputObjectSchema as UserUpsertWithoutFriendshipsAsUserAInputObjectSchema } from './UserUpsertWithoutFriendshipsAsUserAInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutFriendshipsAsUserAInputObjectSchema as UserUpdateToOneWithWhereWithoutFriendshipsAsUserAInputObjectSchema } from './UserUpdateToOneWithWhereWithoutFriendshipsAsUserAInput.schema';
import { UserUpdateWithoutFriendshipsAsUserAInputObjectSchema as UserUpdateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUpdateWithoutFriendshipsAsUserAInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsAsUserAInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsAsUserAInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsAsUserAInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFriendshipsAsUserAInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFriendshipsAsUserAInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutFriendshipsAsUserAInputObjectSchema), z.lazy(() => UserUpdateWithoutFriendshipsAsUserAInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsAsUserAInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutFriendshipsAsUserANestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFriendshipsAsUserANestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutFriendshipsAsUserANestedInput>;
export const UserUpdateOneRequiredWithoutFriendshipsAsUserANestedInputObjectZodSchema = makeSchema();
