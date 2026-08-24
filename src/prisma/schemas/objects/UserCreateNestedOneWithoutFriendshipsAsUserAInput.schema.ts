import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateWithoutFriendshipsAsUserAInputObjectSchema as UserCreateWithoutFriendshipsAsUserAInputObjectSchema } from './UserCreateWithoutFriendshipsAsUserAInput.schema';
import { UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema as UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema } from './UserUncheckedCreateWithoutFriendshipsAsUserAInput.schema';
import { UserCreateOrConnectWithoutFriendshipsAsUserAInputObjectSchema as UserCreateOrConnectWithoutFriendshipsAsUserAInputObjectSchema } from './UserCreateOrConnectWithoutFriendshipsAsUserAInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFriendshipsAsUserAInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFriendshipsAsUserAInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFriendshipsAsUserAInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutFriendshipsAsUserAInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFriendshipsAsUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutFriendshipsAsUserAInput>;
export const UserCreateNestedOneWithoutFriendshipsAsUserAInputObjectZodSchema = makeSchema();
