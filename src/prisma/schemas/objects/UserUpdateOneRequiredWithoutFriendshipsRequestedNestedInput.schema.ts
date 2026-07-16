import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutFriendshipsRequestedInputObjectSchema as UserCreateWithoutFriendshipsRequestedInputObjectSchema } from './UserCreateWithoutFriendshipsRequestedInput.schema';
import { UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema as UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsRequestedInput.schema';
import { UserCreateOrConnectWithoutFriendshipsRequestedInputObjectSchema as UserCreateOrConnectWithoutFriendshipsRequestedInputObjectSchema } from './UserCreateOrConnectWithoutFriendshipsRequestedInput.schema';
import { UserUpsertWithoutFriendshipsRequestedInputObjectSchema as UserUpsertWithoutFriendshipsRequestedInputObjectSchema } from './UserUpsertWithoutFriendshipsRequestedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutFriendshipsRequestedInputObjectSchema as UserUpdateToOneWithWhereWithoutFriendshipsRequestedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutFriendshipsRequestedInput.schema';
import { UserUpdateWithoutFriendshipsRequestedInputObjectSchema as UserUpdateWithoutFriendshipsRequestedInputObjectSchema } from './UserUpdateWithoutFriendshipsRequestedInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsRequestedInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsRequestedInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsRequestedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsRequestedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsRequestedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFriendshipsRequestedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFriendshipsRequestedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutFriendshipsRequestedInputObjectSchema), z.lazy(() => UserUpdateWithoutFriendshipsRequestedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsRequestedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutFriendshipsRequestedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFriendshipsRequestedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutFriendshipsRequestedNestedInput>;
export const UserUpdateOneRequiredWithoutFriendshipsRequestedNestedInputObjectZodSchema = makeSchema();
