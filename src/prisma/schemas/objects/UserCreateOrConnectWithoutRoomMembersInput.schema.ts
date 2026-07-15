import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRoomMembersInputObjectSchema as UserCreateWithoutRoomMembersInputObjectSchema } from './UserCreateWithoutRoomMembersInput.schema';
import { UserUncheckedCreateWithoutRoomMembersInputObjectSchema as UserUncheckedCreateWithoutRoomMembersInputObjectSchema } from './UserUncheckedCreateWithoutRoomMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutRoomMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomMembersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutRoomMembersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRoomMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutRoomMembersInput>;
export const UserCreateOrConnectWithoutRoomMembersInputObjectZodSchema = makeSchema();
