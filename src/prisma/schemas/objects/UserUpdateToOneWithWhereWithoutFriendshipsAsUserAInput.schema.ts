import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutFriendshipsAsUserAInputObjectSchema as UserUpdateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUpdateWithoutFriendshipsAsUserAInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsAsUserAInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsAsUserAInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutFriendshipsAsUserAInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsAsUserAInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutFriendshipsAsUserAInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFriendshipsAsUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFriendshipsAsUserAInput>;
export const UserUpdateToOneWithWhereWithoutFriendshipsAsUserAInputObjectZodSchema = makeSchema();
