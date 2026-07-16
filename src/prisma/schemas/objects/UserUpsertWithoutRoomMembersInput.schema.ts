import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutRoomMembersInputObjectSchema as UserUpdateWithoutRoomMembersInputObjectSchema } from './UserUpdateWithoutRoomMembersInput.schema';
import { UserUncheckedUpdateWithoutRoomMembersInputObjectSchema as UserUncheckedUpdateWithoutRoomMembersInputObjectSchema } from './UserUncheckedUpdateWithoutRoomMembersInput.schema';
import { UserCreateWithoutRoomMembersInputObjectSchema as UserCreateWithoutRoomMembersInputObjectSchema } from './UserCreateWithoutRoomMembersInput.schema';
import { UserUncheckedCreateWithoutRoomMembersInputObjectSchema as UserUncheckedCreateWithoutRoomMembersInputObjectSchema } from './UserUncheckedCreateWithoutRoomMembersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutRoomMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoomMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutRoomMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomMembersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutRoomMembersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutRoomMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutRoomMembersInput>;
export const UserUpsertWithoutRoomMembersInputObjectZodSchema = makeSchema();
