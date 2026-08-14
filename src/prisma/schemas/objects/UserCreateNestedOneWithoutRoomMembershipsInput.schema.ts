import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutRoomMembershipsInputObjectSchema as UserCreateWithoutRoomMembershipsInputObjectSchema } from './UserCreateWithoutRoomMembershipsInput.schema';
import { UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema as UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema } from './UserUncheckedCreateWithoutRoomMembershipsInput.schema';
import { UserCreateOrConnectWithoutRoomMembershipsInputObjectSchema as UserCreateOrConnectWithoutRoomMembershipsInputObjectSchema } from './UserCreateOrConnectWithoutRoomMembershipsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRoomMembershipsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoomMembershipsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutRoomMembershipsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRoomMembershipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutRoomMembershipsInput>;
export const UserCreateNestedOneWithoutRoomMembershipsInputObjectZodSchema = makeSchema();
