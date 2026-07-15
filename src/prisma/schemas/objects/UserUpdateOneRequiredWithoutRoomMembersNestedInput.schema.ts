import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutRoomMembersInputObjectSchema as UserCreateWithoutRoomMembersInputObjectSchema } from './UserCreateWithoutRoomMembersInput.schema';
import { UserUncheckedCreateWithoutRoomMembersInputObjectSchema as UserUncheckedCreateWithoutRoomMembersInputObjectSchema } from './UserUncheckedCreateWithoutRoomMembersInput.schema';
import { UserCreateOrConnectWithoutRoomMembersInputObjectSchema as UserCreateOrConnectWithoutRoomMembersInputObjectSchema } from './UserCreateOrConnectWithoutRoomMembersInput.schema';
import { UserUpsertWithoutRoomMembersInputObjectSchema as UserUpsertWithoutRoomMembersInputObjectSchema } from './UserUpsertWithoutRoomMembersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutRoomMembersInputObjectSchema as UserUpdateToOneWithWhereWithoutRoomMembersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutRoomMembersInput.schema';
import { UserUpdateWithoutRoomMembersInputObjectSchema as UserUpdateWithoutRoomMembersInputObjectSchema } from './UserUpdateWithoutRoomMembersInput.schema';
import { UserUncheckedUpdateWithoutRoomMembersInputObjectSchema as UserUncheckedUpdateWithoutRoomMembersInputObjectSchema } from './UserUncheckedUpdateWithoutRoomMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRoomMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoomMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRoomMembersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutRoomMembersInputObjectSchema), z.lazy(() => UserUpdateWithoutRoomMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoomMembersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoomMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoomMembersNestedInput>;
export const UserUpdateOneRequiredWithoutRoomMembersNestedInputObjectZodSchema = makeSchema();
