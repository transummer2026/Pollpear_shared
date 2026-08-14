import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutRoomMembershipsInputObjectSchema as UserCreateWithoutRoomMembershipsInputObjectSchema } from './UserCreateWithoutRoomMembershipsInput.schema';
import { UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema as UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema } from './UserUncheckedCreateWithoutRoomMembershipsInput.schema';
import { UserCreateOrConnectWithoutRoomMembershipsInputObjectSchema as UserCreateOrConnectWithoutRoomMembershipsInputObjectSchema } from './UserCreateOrConnectWithoutRoomMembershipsInput.schema';
import { UserUpsertWithoutRoomMembershipsInputObjectSchema as UserUpsertWithoutRoomMembershipsInputObjectSchema } from './UserUpsertWithoutRoomMembershipsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutRoomMembershipsInputObjectSchema as UserUpdateToOneWithWhereWithoutRoomMembershipsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutRoomMembershipsInput.schema';
import { UserUpdateWithoutRoomMembershipsInputObjectSchema as UserUpdateWithoutRoomMembershipsInputObjectSchema } from './UserUpdateWithoutRoomMembershipsInput.schema';
import { UserUncheckedUpdateWithoutRoomMembershipsInputObjectSchema as UserUncheckedUpdateWithoutRoomMembershipsInputObjectSchema } from './UserUncheckedUpdateWithoutRoomMembershipsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRoomMembershipsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoomMembershipsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRoomMembershipsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutRoomMembershipsInputObjectSchema), z.lazy(() => UserUpdateWithoutRoomMembershipsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoomMembershipsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutRoomMembershipsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoomMembershipsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutRoomMembershipsNestedInput>;
export const UserUpdateOneRequiredWithoutRoomMembershipsNestedInputObjectZodSchema = makeSchema();
