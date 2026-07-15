import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutRoomMembersInputObjectSchema as UserUpdateWithoutRoomMembersInputObjectSchema } from './UserUpdateWithoutRoomMembersInput.schema';
import { UserUncheckedUpdateWithoutRoomMembersInputObjectSchema as UserUncheckedUpdateWithoutRoomMembersInputObjectSchema } from './UserUncheckedUpdateWithoutRoomMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutRoomMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRoomMembersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutRoomMembersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoomMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRoomMembersInput>;
export const UserUpdateToOneWithWhereWithoutRoomMembersInputObjectZodSchema = makeSchema();
