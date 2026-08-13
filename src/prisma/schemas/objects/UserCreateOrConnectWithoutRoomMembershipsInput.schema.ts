import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRoomMembershipsInputObjectSchema as UserCreateWithoutRoomMembershipsInputObjectSchema } from './UserCreateWithoutRoomMembershipsInput.schema';
import { UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema as UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema } from './UserUncheckedCreateWithoutRoomMembershipsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutRoomMembershipsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRoomMembershipsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutRoomMembershipsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRoomMembershipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutRoomMembershipsInput>;
export const UserCreateOrConnectWithoutRoomMembershipsInputObjectZodSchema = makeSchema();
