import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutFriendshipsReceivedInputObjectSchema as UserUpdateWithoutFriendshipsReceivedInputObjectSchema } from './UserUpdateWithoutFriendshipsReceivedInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsReceivedInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsReceivedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutFriendshipsReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsReceivedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutFriendshipsReceivedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFriendshipsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFriendshipsReceivedInput>;
export const UserUpdateToOneWithWhereWithoutFriendshipsReceivedInputObjectZodSchema = makeSchema();
