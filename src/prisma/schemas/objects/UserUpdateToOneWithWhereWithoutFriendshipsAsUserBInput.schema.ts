import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutFriendshipsAsUserBInputObjectSchema as UserUpdateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUpdateWithoutFriendshipsAsUserBInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsAsUserBInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsAsUserBInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutFriendshipsAsUserBInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsAsUserBInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutFriendshipsAsUserBInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFriendshipsAsUserBInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFriendshipsAsUserBInput>;
export const UserUpdateToOneWithWhereWithoutFriendshipsAsUserBInputObjectZodSchema = makeSchema();
