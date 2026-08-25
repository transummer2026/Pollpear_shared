import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFriendshipsAsUserBInputObjectSchema as UserCreateWithoutFriendshipsAsUserBInputObjectSchema } from './UserCreateWithoutFriendshipsAsUserBInput.schema';
import { UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema as UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsAsUserBInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsAsUserBInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutFriendshipsAsUserBInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFriendshipsAsUserBInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutFriendshipsAsUserBInput>;
export const UserCreateOrConnectWithoutFriendshipsAsUserBInputObjectZodSchema = makeSchema();
