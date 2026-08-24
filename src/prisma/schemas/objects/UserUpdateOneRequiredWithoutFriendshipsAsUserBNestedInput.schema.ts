import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutFriendshipsAsUserBInputObjectSchema as UserCreateWithoutFriendshipsAsUserBInputObjectSchema } from './UserCreateWithoutFriendshipsAsUserBInput.schema';
import { UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema as UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsAsUserBInput.schema';
import { UserCreateOrConnectWithoutFriendshipsAsUserBInputObjectSchema as UserCreateOrConnectWithoutFriendshipsAsUserBInputObjectSchema } from './UserCreateOrConnectWithoutFriendshipsAsUserBInput.schema';
import { UserUpsertWithoutFriendshipsAsUserBInputObjectSchema as UserUpsertWithoutFriendshipsAsUserBInputObjectSchema } from './UserUpsertWithoutFriendshipsAsUserBInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutFriendshipsAsUserBInputObjectSchema as UserUpdateToOneWithWhereWithoutFriendshipsAsUserBInputObjectSchema } from './UserUpdateToOneWithWhereWithoutFriendshipsAsUserBInput.schema';
import { UserUpdateWithoutFriendshipsAsUserBInputObjectSchema as UserUpdateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUpdateWithoutFriendshipsAsUserBInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsAsUserBInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsAsUserBInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsAsUserBInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFriendshipsAsUserBInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFriendshipsAsUserBInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutFriendshipsAsUserBInputObjectSchema), z.lazy(() => UserUpdateWithoutFriendshipsAsUserBInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsAsUserBInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutFriendshipsAsUserBNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFriendshipsAsUserBNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutFriendshipsAsUserBNestedInput>;
export const UserUpdateOneRequiredWithoutFriendshipsAsUserBNestedInputObjectZodSchema = makeSchema();
