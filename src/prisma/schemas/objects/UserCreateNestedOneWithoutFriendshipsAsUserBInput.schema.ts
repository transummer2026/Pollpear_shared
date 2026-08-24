import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutFriendshipsAsUserBInputObjectSchema as UserCreateWithoutFriendshipsAsUserBInputObjectSchema } from './UserCreateWithoutFriendshipsAsUserBInput.schema';
import { UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema as UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsAsUserBInput.schema';
import { UserCreateOrConnectWithoutFriendshipsAsUserBInputObjectSchema as UserCreateOrConnectWithoutFriendshipsAsUserBInputObjectSchema } from './UserCreateOrConnectWithoutFriendshipsAsUserBInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsAsUserBInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsAsUserBInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFriendshipsAsUserBInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutFriendshipsAsUserBInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFriendshipsAsUserBInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutFriendshipsAsUserBInput>;
export const UserCreateNestedOneWithoutFriendshipsAsUserBInputObjectZodSchema = makeSchema();
