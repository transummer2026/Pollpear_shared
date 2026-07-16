import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutRoomMembersInputObjectSchema as UserCreateWithoutRoomMembersInputObjectSchema } from './UserCreateWithoutRoomMembersInput.schema';
import { UserUncheckedCreateWithoutRoomMembersInputObjectSchema as UserUncheckedCreateWithoutRoomMembersInputObjectSchema } from './UserUncheckedCreateWithoutRoomMembersInput.schema';
import { UserCreateOrConnectWithoutRoomMembersInputObjectSchema as UserCreateOrConnectWithoutRoomMembersInputObjectSchema } from './UserCreateOrConnectWithoutRoomMembersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRoomMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRoomMembersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutRoomMembersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRoomMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutRoomMembersInput>;
export const UserCreateNestedOneWithoutRoomMembersInputObjectZodSchema = makeSchema();
