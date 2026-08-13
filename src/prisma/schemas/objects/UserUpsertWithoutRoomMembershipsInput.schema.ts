import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutRoomMembershipsInputObjectSchema as UserUpdateWithoutRoomMembershipsInputObjectSchema } from './UserUpdateWithoutRoomMembershipsInput.schema';
import { UserUncheckedUpdateWithoutRoomMembershipsInputObjectSchema as UserUncheckedUpdateWithoutRoomMembershipsInputObjectSchema } from './UserUncheckedUpdateWithoutRoomMembershipsInput.schema';
import { UserCreateWithoutRoomMembershipsInputObjectSchema as UserCreateWithoutRoomMembershipsInputObjectSchema } from './UserCreateWithoutRoomMembershipsInput.schema';
import { UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema as UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema } from './UserUncheckedCreateWithoutRoomMembershipsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutRoomMembershipsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoomMembershipsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutRoomMembershipsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutRoomMembershipsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutRoomMembershipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutRoomMembershipsInput>;
export const UserUpsertWithoutRoomMembershipsInputObjectZodSchema = makeSchema();
