import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutFriendshipsRequestedInputObjectSchema as UserUpdateWithoutFriendshipsRequestedInputObjectSchema } from './UserUpdateWithoutFriendshipsRequestedInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsRequestedInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsRequestedInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsRequestedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutFriendshipsRequestedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsRequestedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutFriendshipsRequestedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFriendshipsRequestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFriendshipsRequestedInput>;
export const UserUpdateToOneWithWhereWithoutFriendshipsRequestedInputObjectZodSchema = makeSchema();
