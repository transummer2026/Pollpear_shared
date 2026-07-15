import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateWithoutFriendshipsReceivedInputObjectSchema as UserUpdateWithoutFriendshipsReceivedInputObjectSchema } from './UserUpdateWithoutFriendshipsReceivedInput.schema';
import { UserUncheckedUpdateWithoutFriendshipsReceivedInputObjectSchema as UserUncheckedUpdateWithoutFriendshipsReceivedInputObjectSchema } from './UserUncheckedUpdateWithoutFriendshipsReceivedInput.schema';
import { UserCreateWithoutFriendshipsReceivedInputObjectSchema as UserCreateWithoutFriendshipsReceivedInputObjectSchema } from './UserCreateWithoutFriendshipsReceivedInput.schema';
import { UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema as UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsReceivedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutFriendshipsReceivedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFriendshipsReceivedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsReceivedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsReceivedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutFriendshipsReceivedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutFriendshipsReceivedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutFriendshipsReceivedInput>;
export const UserUpsertWithoutFriendshipsReceivedInputObjectZodSchema = makeSchema();
