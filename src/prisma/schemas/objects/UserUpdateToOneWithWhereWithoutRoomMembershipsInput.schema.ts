import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutRoomMembershipsInputObjectSchema as UserUpdateWithoutRoomMembershipsInputObjectSchema } from './UserUpdateWithoutRoomMembershipsInput.schema';
import { UserUncheckedUpdateWithoutRoomMembershipsInputObjectSchema as UserUncheckedUpdateWithoutRoomMembershipsInputObjectSchema } from './UserUncheckedUpdateWithoutRoomMembershipsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutRoomMembershipsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoomMembershipsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutRoomMembershipsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoomMembershipsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoomMembershipsInput>;
export const UserUpdateToOneWithWhereWithoutRoomMembershipsInputObjectZodSchema = makeSchema();
